'use client'

import { Upload, FileText, AlertCircle } from 'lucide-react'
import { isValidAadhaar, isValidPAN } from '@/lib/validators'
import type { FormData } from '../membership-registration-form'

interface Step2Props {
  data: FormData
  errors: Record<string, string>
  onUpdate: (updates: Partial<FormData>) => void
  setErrors: (errors: Record<string, string>) => void
}

export default function Step2IdentityVerification({
  data,
  errors,
  onUpdate,
  setErrors,
}: Step2Props) {
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fileType: 'idFile1' | 'idFile2' | 'photoFile'
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, [fileType]: 'File size must be less than 5MB' })
        return
      }
      if (!['application/pdf', 'image/jpeg', 'image/png'].includes(file.type)) {
        setErrors({
          ...errors,
          [fileType]: 'File must be PDF or JPG/PNG image',
        })
        return
      }
      onUpdate({ [fileType]: file })
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[fileType]
        return newErrors
      })
    }
  }

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (!data.idType1) newErrors.idType1 = 'First ID type is required'
    if (!data.idFile1) newErrors.idFile1 = 'First ID document is required'
    
    if (!data.idType2) newErrors.idType2 = 'Second ID type is required'
    if (!data.idFile2) newErrors.idFile2 = 'Second ID document is required'
    
    if (data.idType1 && data.idType2 && data.idType1 === data.idType2) {
      newErrors.idType2 = 'Second ID type must be different from the first'
    }

    if (!data.photoFile) newErrors.photoFile = 'Passport-size photo is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
        Identity Verification
      </h2>

      {/* First ID Type Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Select First ID Proof *
        </label>
        <div className="grid gap-3 sm:grid-cols-3">
          {['AADHAAR', 'PAN', 'VOTER_ID'].map((type) => (
            <label
              key={`1-${type}`}
              className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition ${
                data.idType1 === type
                  ? 'border-gold bg-gold/5'
                  : 'border-gray-200 hover:border-gold/50'
              }`}
            >
              <input
                type="radio"
                name="idType1"
                value={type}
                checked={data.idType1 === type}
                onChange={(e) => onUpdate({ idType1: e.target.value as any })}
                className="w-4 h-4 text-gold"
              />
              <span className="ml-3 font-semibold text-gray-900">
                {type === 'VOTER_ID' ? 'Voter ID' : type}
              </span>
            </label>
          ))}
        </div>
        {errors.idType1 && <p className="text-red-600 text-sm mt-2">{errors.idType1}</p>}
      </div>

      {/* First ID Document Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          {data.idType1 ? `${data.idType1 === 'VOTER_ID' ? 'Voter ID' : data.idType1} Document *` : 'First ID Document *'}
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gold transition">
          <input
            type="file"
            accept="image/*,.pdf"
            capture="environment"
            onChange={(e) => handleFileChange(e, 'idFile1')}
            className="hidden"
            id="id-file-1"
          />
          <label htmlFor="id-file-1" className="cursor-pointer">
            <div className="flex flex-col items-center">
              <Upload size={40} className="text-gold mb-3" />
              <p className="font-semibold text-gray-900">
                {data.idFile1 ? data.idFile1.name : 'Click to take a photo or choose file'}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Camera (Phone) or PDF/JPG/PNG (max 5MB)
              </p>
            </div>
          </label>
        </div>
        {errors.idFile1 && (
          <p className="text-red-600 text-sm mt-2">{errors.idFile1}</p>
        )}
      </div>

      {/* Second ID Type Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Select Second ID Proof *
        </label>
        <div className="grid gap-3 sm:grid-cols-3">
          {['AADHAAR', 'PAN', 'VOTER_ID'].map((type) => (
            <label
              key={`2-${type}`}
              className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition ${
                data.idType2 === type
                  ? 'border-gold bg-gold/5'
                  : 'border-gray-200 hover:border-gold/50'
              } ${data.idType1 === type ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <input
                type="radio"
                name="idType2"
                value={type}
                checked={data.idType2 === type}
                onChange={(e) => onUpdate({ idType2: e.target.value as any })}
                disabled={data.idType1 === type}
                className="w-4 h-4 text-gold"
              />
              <span className="ml-3 font-semibold text-gray-900">
                {type === 'VOTER_ID' ? 'Voter ID' : type}
              </span>
            </label>
          ))}
        </div>
        {errors.idType2 && <p className="text-red-600 text-sm mt-2">{errors.idType2}</p>}
      </div>

      {/* Second ID Document Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          {data.idType2 ? `${data.idType2 === 'VOTER_ID' ? 'Voter ID' : data.idType2} Document *` : 'Second ID Document *'}
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gold transition">
          <input
            type="file"
            accept="image/*,.pdf"
            capture="environment"
            onChange={(e) => handleFileChange(e, 'idFile2')}
            className="hidden"
            id="id-file-2"
          />
          <label htmlFor="id-file-2" className="cursor-pointer">
            <div className="flex flex-col items-center">
              <Upload size={40} className="text-gold mb-3" />
              <p className="font-semibold text-gray-900">
                {data.idFile2 ? data.idFile2.name : 'Click to take a photo or choose file'}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Camera (Phone) or PDF/JPG/PNG (max 5MB)
              </p>
            </div>
          </label>
        </div>
        {errors.idFile2 && (
          <p className="text-red-600 text-sm mt-2">{errors.idFile2}</p>
        )}
      </div>

      {/* Passport-size Photo Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Passport-size Photo *
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gold transition">
          <input
            type="file"
            accept="image/*"
            capture="user"
            onChange={(e) => handleFileChange(e, 'photoFile')}
            className="hidden"
            id="photo-file"
          />
          <label htmlFor="photo-file" className="cursor-pointer">
            <div className="flex flex-col items-center">
              <Upload size={40} className="text-gold mb-3" />
              <p className="font-semibold text-gray-900">
                {data.photoFile ? data.photoFile.name : 'Click to take a selfie or choose file'}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Camera (Phone) or JPG/PNG only (max 5MB)
              </p>
            </div>
          </label>
        </div>
        {errors.photoFile && (
          <p className="text-red-600 text-sm mt-2">{errors.photoFile}</p>
        )}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
        <AlertCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-900">
          <p className="font-semibold">Document Requirements:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
            <li>Clear, colored, legible copy</li>
            <li>All details clearly visible</li>
            <li>File size less than 5MB</li>
            <li>Passport photo: 4x6 cm, white background</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
