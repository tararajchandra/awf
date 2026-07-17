'use client'

import React, { useState, useEffect } from 'react'
import { Check, Loader } from 'lucide-react'
import type { FormData } from '../membership-registration-form'

interface Step4Props {
  data: FormData
  errors: Record<string, string>
  onUpdate: (updates: Partial<FormData>) => void
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
  loading: boolean
  setLoading: (loading: boolean) => void
}

interface Tier {
  name: string
  price: number
  benefits: string[]
  razorpayPlanId: string
  color: string
}

export default function Step4MembershipPayment({
  data,
  errors,
  onUpdate,
  setErrors,
  loading,
  setLoading,
}: Step4Props) {
  const [tiers, setTiers] = useState<Record<string, Tier> | null>(null)
  const [paymentProcessing, setPaymentProcessing] = useState(false)

  // Fetch tiers on mount
  React.useEffect(() => {
    const fetchTiers = async () => {
      try {
        const response = await fetch('/api/membership/payment')
        const result = await response.json()
        if (result.success) {
          setTiers(result.tiers)
          if (Object.keys(result.tiers).length === 1) {
            onUpdate({ selectedTier: Object.keys(result.tiers)[0] as any })
          }
        }
      } catch (error) {
        console.error('Error fetching tiers:', error)
      }
    }
    fetchTiers()
  }, [])

  const handleSelectTier = (tier: string) => {
    onUpdate({ selectedTier: tier as any })
    setErrors({})
  }

  const uploadFile = async (file: File | null) => {
    if (!file) return null
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
    const result = await res.json()
    if (result.success) {
      return result.url
    }
    throw new Error(result.error || 'Upload failed')
  }

  const handlePayment = async () => {
    if (!data.selectedTier) {
      setErrors({ selectedTier: 'Please select a membership tier' })
      return
    }

    setPaymentProcessing(true)
    try {
      // 1. Upload files first
      const idFile1Url = await uploadFile(data.idFile1 as any)
      const idFile2Url = await uploadFile(data.idFile2 as any)
      const photoFileUrl = await uploadFile(data.photoFile as any)

      // 2. Prepare payload
      const payload = {
        ...data,
        idFile1Url,
        idFile2Url,
        photoFileUrl,
      }

      const response = await fetch('/api/membership/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()
      if (result.success) {
        // Initialize Razorpay
        const script = document.createElement('script')
        script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        document.body.appendChild(script)

        script.onload = () => {
          const options: any = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            ...(data.selectedTier === 'LIFETIME'
              ? {
                  order_id: result.order.id,
                  amount: result.order.amount,
                  currency: result.order.currency,
                }
              : {
                  subscription_id: result.subscription.id,
                  total_count: result.subscription.total_count,
                  quantity: result.subscription.quantity,
                }),
            name: 'Anokha Welfare Foundation',
            description: `AWF ${data.selectedTier} Membership`,
            email: data.email,
            contact: data.mobile,
            handler: (response: any) => {
              handlePaymentSuccess(response, result.memberId)
            },
            prefill: {
              name: data.fullName,
              email: data.email,
              contact: data.mobile,
            },
            theme: {
              color: '#C87000',
            },
          }
          // @ts-ignore
          const rzp = new window.Razorpay(options)
          rzp.open()
        }
      }
    } catch (error) {
      setErrors({ payment: 'Failed to initiate payment' })
    } finally {
      setPaymentProcessing(false)
    }
  }

  const handlePaymentSuccess = async (response: any, memberId: string) => {
    try {
      const verifyResponse = await fetch('/api/membership/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id || '',
          razorpay_subscription_id: response.razorpay_subscription_id || '',
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        }),
      })

      if (verifyResponse.ok) {
        // Redirect to success page
        window.location.href = `/membership/success?memberId=${memberId}`
      }
    } catch (error) {
      setErrors({ payment: 'Payment verification failed' })
    }
  }

  if (!tiers) {
    return <div className="text-center py-8">Loading membership options...</div>
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
        Membership Details
      </h2>

      {/* Tier Details */}
      <div className="flex justify-center">
        <div className="w-full max-w-md">
        {Object.entries(tiers).map(([key, tier]) => (
          <div
            key={key}
            onClick={() => handleSelectTier(key)}
            className={`rounded-2xl border-2 p-6 cursor-pointer transition-all ${
              data.selectedTier === key
                ? 'border-gold bg-gold/5 shadow-lg'
                : 'border-gray-200 hover:border-gold/50'
            } ${key === 'EXECUTIVE' ? 'lg:scale-105 lg:shadow-xl' : ''}`}
          >
            {/* Tier Badge */}
            {key === 'EXECUTIVE' && (
              <div className="mb-3">
                <span className="bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
            )}

            {/* Tier Name & Price */}
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
              {tier.name}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gold">
                ₹{(tier.price / 100).toLocaleString()}
              </span>
              <span className="text-gray-600 ml-2">
                {key === 'LIFETIME' ? '(one-time)' : '/year'}
              </span>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-6">
              {tier.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Selection Indicator */}
            {data.selectedTier === key && (
              <div className="text-center text-gold font-bold">✓ Selected</div>
            )}
          </div>
        ))}
        </div>
      </div>

      {errors.selectedTier && (
        <p className="text-red-600 text-sm text-center">{errors.selectedTier}</p>
      )}

      {errors.payment && (
        <p className="text-red-600 text-sm text-center">{errors.payment}</p>
      )}

      {/* Payment Button */}
      <div className="text-center pt-6">
        <button
          onClick={handlePayment}
          disabled={!data.selectedTier || paymentProcessing}
          className={`px-8 py-4 rounded-full font-bold text-white transition-all flex items-center justify-center gap-2 mx-auto ${
            !data.selectedTier || paymentProcessing
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gold hover:bg-opacity-90'
          }`}
        >
          {paymentProcessing ? (
            <>
              <Loader size={20} className="animate-spin" />
              Processing...
            </>
          ) : (
            `Pay ₹${
              data.selectedTier && tiers[data.selectedTier]
                ? (tiers[data.selectedTier].price / 100).toLocaleString()
                : '0'
            }`
          )}
        </button>
      </div>

      {/* Summary */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4">Registration Summary</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Name:</span>
            <span className="font-semibold">{data.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Mobile:</span>
            <span className="font-semibold">{data.mobile}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email:</span>
            <span className="font-semibold">{data.email}</span>
          </div>
          {data.selectedTier && (
            <div className="flex justify-between pt-2 border-t border-gray-300">
              <span className="text-gray-600">Membership Tier:</span>
              <span className="font-semibold text-gold">{tiers[data.selectedTier].name}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
