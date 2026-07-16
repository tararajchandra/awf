'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle, Upload } from 'lucide-react'
import Step1PersonalDetails from './steps/step-1-personal'
import Step2IdentityVerification from './steps/step-2-identity'
import Step3BankDetails from './steps/step-3-bank'
import Step4MembershipPayment from './steps/step-4-payment'

export type FormData = {
  // Step 1
  fullName: string
  dateOfBirth: string
  gender: string
  mobile: string
  email: string
  address: {
    state: string
    district: string
    pinCode: string
  }
  occupation: string
  referralId: string
  referralName: string
  otpVerified: boolean

  // Step 2
  idType1: 'AADHAAR' | 'PAN' | 'VOTER_ID' | ''
  idFile1: File | null
  idType2: 'AADHAAR' | 'PAN' | 'VOTER_ID' | ''
  idFile2: File | null
  photoFile: File | null

  // Step 3
  bankDetails: {
    accountHolder: string
    bankName: string
    accountNumber: string
    ifscCode: string
    upiId: string
  }

  // Step 4
  selectedTier: 'GENERAL' | 'EXECUTIVE' | 'LIFETIME' | null
}

const STEPS = [
  { number: 1, title: 'Personal Details' },
  { number: 2, title: 'Identity Verification' },
  { number: 3, title: 'Bank Details' },
  { number: 4, title: 'Membership & Payment' },
]

export default function MembershipRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    mobile: '',
    email: '',
    address: { state: '', district: '', pinCode: '' },
    occupation: '',
    referralId: '',
    referralName: '',
    otpVerified: false,
    idType1: 'AADHAAR',
    idFile1: null,
    idType2: 'PAN',
    idFile2: null,
    photoFile: null,
    bankDetails: {
      accountHolder: '',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      upiId: '',
    },
    selectedTier: null,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
      setErrors({})
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setErrors({})
    }
  }

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
  }

  const progressPercentage = ((currentStep - 1) / (STEPS.length - 1)) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-4">
            Join AWF Membership
          </h1>
          <p className="text-gray-600 text-lg">
            Complete registration in 4 simple steps
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className={`flex flex-col items-center ${
                  step.number === currentStep ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                    step.number < currentStep
                      ? 'bg-gold text-white'
                      : step.number === currentStep
                      ? 'bg-gold text-white ring-4 ring-gold ring-opacity-30'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step.number < currentStep ? <CheckCircle size={24} /> : step.number}
                </div>
                <p className="text-sm font-semibold mt-2 text-gray-700 text-center hidden sm:block">
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          {/* Progress Line */}
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gold h-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[2rem] shadow-xl p-8 sm:p-12">
          {currentStep === 1 && (
            <Step1PersonalDetails
              data={formData}
              errors={errors}
              onUpdate={updateFormData}
              setErrors={setErrors}
            />
          )}

          {currentStep === 2 && (
            <Step2IdentityVerification
              data={formData}
              errors={errors}
              onUpdate={updateFormData}
              setErrors={setErrors}
            />
          )}

          {currentStep === 3 && (
            <Step3BankDetails
              data={formData}
              errors={errors}
              onUpdate={updateFormData}
              setErrors={setErrors}
            />
          )}

          {currentStep === 4 && (
            <Step4MembershipPayment
              data={formData}
              errors={errors}
              onUpdate={updateFormData}
              setErrors={setErrors}
              loading={loading}
              setLoading={setLoading}
            />
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={currentStep === STEPS.length || loading}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition ${
                currentStep === STEPS.length || loading
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gold text-white hover:bg-opacity-90'
              }`}
            >
              {currentStep === STEPS.length ? (
                'Complete'
              ) : (
                <>
                  Next
                  <ChevronRight size={20} />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="text-center mt-6 text-gray-600">
          Step {currentStep} of {STEPS.length}
        </div>
      </div>
    </div>
  )
}
