// Utility to generate unique member ID
export function generateMemberId(): string {
  const year = new Date().getFullYear()
  const randomNum = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, '0')
  return `AWF-${year}-${randomNum}`
}

// Utility to validate phone number (Indian format)
export function isValidIndianPhone(phone: string): boolean {
  const phoneRegex = /^[6-9]\d{9}$/
  return phoneRegex.test(phone.replace(/\D/g, ''))
}

// Utility to validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Utility to validate Aadhaar (12 digits)
export function isValidAadhaar(aadhaar: string): boolean {
  return /^\d{12}$/.test(aadhaar.replace(/\s/g, ''))
}

// Utility to validate PAN (10 chars)
export function isValidPAN(pan: string): boolean {
  return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)
}

// Utility to validate IFSC
export function isValidIFSC(ifsc: string): boolean {
  return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc)
}

// Utility to validate UPI
export function isValidUPI(upi: string): boolean {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z]{3,}$/.test(upi)
}

// Format phone number
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.slice(-10)
}

// Mask account number (show last 4 digits)
export function maskAccountNumber(account: string): string {
  const cleaned = account.replace(/\s/g, '')
  const lastFour = cleaned.slice(-4)
  return `****${lastFour}`
}
