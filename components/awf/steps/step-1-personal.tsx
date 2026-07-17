'use client'

import { useState } from 'react'
import { AlertCircle, Phone, Mail } from 'lucide-react'
import { isValidIndianPhone, isValidEmail } from '@/lib/validators'
import type { FormData } from '../membership-registration-form'
import statesData from '@/lib/states-and-districts.json'

interface Step1Props {
  data: FormData
  errors: Record<string, string>
  onUpdate: (updates: Partial<FormData>) => void
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

export default function Step1PersonalDetails({
  data,
  errors,
  onUpdate,
  setErrors,
}: Step1Props) {
  const [otpSent, setOtpSent] = useState(false)
  const [otpInput, setOtpInput] = useState('')
  const [otpLoading, setOtpLoading] = useState(false)
  const [referralLoading, setReferralLoading] = useState(false)

  const handleVerifyReferral = async () => {
    if (!data.referralId) return
    setReferralLoading(true)
    try {
      const response = await fetch(`/api/membership/lookup-referral?memberId=${data.referralId}`)
      const result = await response.json()
      if (result.success) {
        onUpdate({ referralName: result.fullName })
        setErrors((prev) => ({ ...prev, referralId: '' }))
      } else {
        onUpdate({ referralName: '' })
        setErrors((prev) => ({ ...prev, referralId: 'Invalid Referral Member ID' }))
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, referralId: 'Error verifying ID' }))
    } finally {
      setReferralLoading(false)
    }
  }

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (!data.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!data.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    if (!data.gender) newErrors.gender = 'Gender is required'
    if (!data.mobile.trim()) newErrors.mobile = 'Mobile number is required'
    else if (!isValidIndianPhone(data.mobile))
      newErrors.mobile = 'Invalid Indian phone number'
    if (data.email.trim() && !isValidEmail(data.email)) newErrors.email = 'Invalid email'
    if (!data.address.state) newErrors['address.state'] = 'State is required'
    if (!data.address.district) newErrors['address.district'] = 'District is required'
    if (!data.address.pinCode) newErrors['address.pinCode'] = 'Pin code is required'
    if (!data.otpVerified) newErrors.otpVerified = 'Mobile OTP verification required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSendOTP = async () => {
    if (!isValidIndianPhone(data.mobile)) {
      setErrors({ mobile: 'Invalid phone number' })
      return
    }

    setOtpLoading(true)
    try {
      const response = await fetch('/api/membership/otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: data.mobile, action: 'send' }),
      })

      if (response.ok) {
        setOtpSent(true)
        setErrors({})
      } else {
        setErrors({ mobile: 'Failed to send OTP' })
      }
    } catch (error) {
      setErrors({ mobile: 'Error sending OTP' })
    } finally {
      setOtpLoading(false)
    }
  }

  const handleVerifyOTP = async () => {
    if (!otpInput) {
      setErrors({ otp: 'OTP is required' })
      return
    }

    setOtpLoading(true)
    try {
      const response = await fetch('/api/membership/otp-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: data.mobile, otp: otpInput }),
      })

      if (response.ok) {
        onUpdate({ otpVerified: true })
        setOtpSent(false)
        setOtpInput('')
        setErrors({})
      } else {
        setErrors({ otp: 'Invalid OTP' })
      }
    } catch (error) {
      setErrors({ otp: 'Error verifying OTP' })
    } finally {
      setOtpLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
        Personal Details
      </h2>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e) => onUpdate({ fullName: e.target.value })}
          placeholder="Your full name"
          className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold ${
            errors.fullName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.fullName && (
          <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Date of Birth & Gender */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Date of Birth *
          </label>
          <input
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => onUpdate({ dateOfBirth: e.target.value })}
            className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.dateOfBirth && (
            <p className="text-red-600 text-sm mt-1">{errors.dateOfBirth}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Gender *
          </label>
          <select
            value={data.gender}
            onChange={(e) => onUpdate({ gender: e.target.value })}
            className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.gender ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not">Prefer not to say</option>
          </select>
          {errors.gender && (
            <p className="text-red-600 text-sm mt-1">{errors.gender}</p>
          )}
        </div>
      </div>

      {/* Mobile Number with OTP */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Mobile Number * {data.otpVerified && <span className="text-green-600">✓</span>}
        </label>
        <div className="flex gap-2">
          <input
            type="tel"
            value={data.mobile}
            onChange={(e) => {
              onUpdate({ mobile: e.target.value })
              if (errors.mobile) setErrors({})
            }}
            placeholder="10-digit mobile number"
            disabled={data.otpVerified}
            className={`flex-1 rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold disabled:bg-gray-100 ${
              errors.mobile ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {!data.otpVerified && (
            <button
              onClick={handleSendOTP}
              disabled={otpLoading || !isValidIndianPhone(data.mobile)}
              className="px-6 py-3 bg-gold text-white rounded-lg font-semibold hover:bg-opacity-90 disabled:bg-gray-300"
            >
              {otpLoading ? 'Sending...' : 'Send OTP'}
            </button>
          )}
        </div>
        {errors.mobile && (
          <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>
        )}
      </div>

      {/* OTP Input */}
      {otpSent && !data.otpVerified && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value.slice(0, 6))}
              placeholder="6-digit OTP"
              maxLength={6}
              className="flex-1 rounded-lg border border-blue-300 px-4 py-2 text-center"
            />
            <button
              onClick={handleVerifyOTP}
              disabled={otpLoading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              Verify
            </button>
          </div>
          {errors.otp && (
            <p className="text-red-600 text-sm mt-2">{errors.otp}</p>
          )}
        </div>
      )}

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address (Optional)
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => onUpdate({ email: e.target.value })}
          placeholder="your@email.com"
          className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Residential Address *
        </label>
        <div className="grid gap-4 sm:grid-cols-3">
          <select
            value={data.address.state}
            onChange={(e) =>
              onUpdate({
                address: { ...data.address, state: e.target.value, district: '' },
              })
            }
            className={`rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold bg-white ${
              errors['address.state'] ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select State</option>
            {statesData.states.map((s) => (
              <option key={s.state} value={s.state}>
                {s.state}
              </option>
            ))}
          </select>
          <select
            value={data.address.district}
            onChange={(e) =>
              onUpdate({
                address: { ...data.address, district: e.target.value },
              })
            }
            disabled={!data.address.state}
            className={`rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold bg-white disabled:bg-gray-100 ${
              errors['address.district'] ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select District</option>
            {statesData.states
              .find((s) => s.state === data.address.state)
              ?.districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
          </select>
          <input
            type="text"
            value={data.address.pinCode}
            onChange={(e) =>
              onUpdate({
                address: { ...data.address, pinCode: e.target.value },
              })
            }
            placeholder="Pin Code"
            className={`rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold ${
              errors['address.pinCode'] ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        </div>
      </div>

      {/* Occupation */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Occupation
        </label>
        <input
          type="text"
          value={data.occupation}
          onChange={(e) => onUpdate({ occupation: e.target.value })}
          placeholder="Your occupation"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      {/* Referral ID */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Referral Member ID (Optional for first members)
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={data.referralId}
            onChange={(e) => {
              onUpdate({ referralId: e.target.value, referralName: '' })
              if (errors.referralId) setErrors((prev) => ({ ...prev, referralId: '' }))
            }}
            placeholder="e.g. AWF-2024-XXXXX"
            className={`flex-1 rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.referralId ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          <button
            onClick={handleVerifyReferral}
            disabled={!data.referralId || referralLoading || !!data.referralName}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              data.referralName 
                ? 'bg-green-600 text-white' 
                : 'bg-gold text-white hover:bg-opacity-90 disabled:bg-gray-300'
            }`}
          >
            {referralLoading ? 'Verifying...' : data.referralName ? 'Verified ✓' : 'Verify'}
          </button>
        </div>
        {errors.referralId && (
          <p className="text-red-600 text-sm mt-1">{errors.referralId}</p>
        )}
        {data.referralName && (
          <p className="text-green-600 text-sm mt-2 font-semibold">
            Referred by: {data.referralName}
          </p>
        )}
      </div>
    </div>
  )
}
