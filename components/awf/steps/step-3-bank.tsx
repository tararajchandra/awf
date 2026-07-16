'use client'

import { AlertCircle } from 'lucide-react'
import {
  isValidIFSC,
  isValidUPI,
  maskAccountNumber,
} from '@/lib/validators'
import type { FormData } from '../membership-registration-form'

interface Step3Props {
  data: FormData
  errors: Record<string, string>
  onUpdate: (updates: Partial<FormData>) => void
  setErrors: (errors: Record<string, string>) => void
}

export default function Step3BankDetails({
  data,
  errors,
  onUpdate,
  setErrors,
}: Step3Props) {
  const updateBankDetails = (field: keyof typeof data.bankDetails, value: string) => {
    onUpdate({
      bankDetails: { ...data.bankDetails, [field]: value },
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
        Bank Details
      </h2>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 mb-6">
        <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-amber-900">
          <p className="font-semibold">Required for Honourarium Eligibility</p>
          <p className="mt-1">
            Bank details are needed to process honourarium payments for eligible members.
          </p>
        </div>
      </div>

      {/* Account Holder Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Account Holder Name *
        </label>
        <input
          type="text"
          value={data.bankDetails.accountHolder}
          onChange={(e) => updateBankDetails('accountHolder', e.target.value)}
          placeholder="Name as it appears on bank account"
          className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold ${
            errors.accountHolder ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.accountHolder && (
          <p className="text-red-600 text-sm mt-1">{errors.accountHolder}</p>
        )}
      </div>

      {/* Bank Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Bank Name *
        </label>
        <input
          type="text"
          value={data.bankDetails.bankName}
          onChange={(e) => updateBankDetails('bankName', e.target.value)}
          placeholder="e.g., State Bank of India"
          className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold ${
            errors.bankName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.bankName && (
          <p className="text-red-600 text-sm mt-1">{errors.bankName}</p>
        )}
      </div>

      {/* Account Number & IFSC */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Account Number *
          </label>
          <input
            type="text"
            value={data.bankDetails.accountNumber}
            onChange={(e) => updateBankDetails('accountNumber', e.target.value)}
            placeholder="Your account number"
            className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.accountNumber ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {data.bankDetails.accountNumber && (
            <p className="text-xs text-gray-600 mt-1">
              Display: {maskAccountNumber(data.bankDetails.accountNumber)}
            </p>
          )}
          {errors.accountNumber && (
            <p className="text-red-600 text-sm mt-1">{errors.accountNumber}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            IFSC Code *
          </label>
          <input
            type="text"
            value={data.bankDetails.ifscCode.toUpperCase()}
            onChange={(e) => updateBankDetails('ifscCode', e.target.value)}
            placeholder="e.g., SBIN0001234"
            maxLength={11}
            className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold uppercase ${
              errors.ifscCode ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.ifscCode && (
            <p className="text-red-600 text-sm mt-1">{errors.ifscCode}</p>
          )}
        </div>
      </div>

      {/* UPI ID (Optional) */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          UPI ID (Optional)
        </label>
        <input
          type="text"
          value={data.bankDetails.upiId}
          onChange={(e) => updateBankDetails('upiId', e.target.value)}
          placeholder="e.g., yourname@upi"
          className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold ${
            errors.upiId ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.upiId && (
          <p className="text-red-600 text-sm mt-1">{errors.upiId}</p>
        )}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900 font-semibold mb-2">
          Security Note:
        </p>
        <p className="text-xs text-blue-900">
          Your account details are encrypted and stored securely. We only use
          them for honourarium transfers and will never share them with third
          parties.
        </p>
      </div>
    </div>
  )
}
