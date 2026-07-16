// Generate OTP
export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Store OTP in memory (in production, use Redis or database)
const otpStore = new Map<string, { code: string; expiresAt: number }>()

export function storeOTP(phone: string, otp: string, expiryMinutes: number = 10) {
  const expiresAt = Date.now() + expiryMinutes * 60 * 1000
  otpStore.set(phone, { code: otp, expiresAt })
}

export function verifyOTP(phone: string, otp: string): boolean {
  const stored = otpStore.get(phone)
  if (!stored) return false
  if (Date.now() > stored.expiresAt) {
    otpStore.delete(phone)
    return false
  }
  const isValid = stored.code === otp
  if (isValid) {
    otpStore.delete(phone)
  }
  return isValid
}

// Send generic SMS using Fast2SMS API
export async function sendSMS(phone: string, message: string): Promise<boolean> {
  try {
    const apiKey = process.env.FAST2SMS_API_KEY
    if (!apiKey) {
      console.log(`[MOCK SMS] FAST2SMS_API_KEY missing. Msg: "${message}" intended for ${phone}`)
      return true // Fallback to mock in dev
    }

    const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "POST",
      headers: {
        "authorization": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        route: "q",
        message: message,
        language: "english",
        flash: 0,
        numbers: phone,
      })
    })

    const data = await response.json()
    console.log('Fast2SMS response:', data)
    
    return data.return === true
  } catch (error) {
    console.error('Error sending SMS via Fast2SMS:', error)
    return false
  }
}

// Send OTP using Fast2SMS API
export async function sendOTPSMS(phone: string, otp: string): Promise<boolean> {
  const message = `Your AWF Membership verification OTP is ${otp}. Do not share this with anyone.`
  return sendSMS(phone, message)
}
