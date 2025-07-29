import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/contact'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { ZodError } from 'zod'

// Rate Limiting Setup
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
})

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 requests per hour
})

export async function POST(req: Request) {
  try {
    // Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for') || 'anonymous'
    const { success } = await ratelimit.limit(ip)
    
    if (!success) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        { status: 429 }
      )
    }

    const json = await req.json()
    const body = contactFormSchema.parse(json)

    // Hier können Sie die E-Mail-Logik implementieren
    // Beispiel mit nodemailer oder einem anderen E-Mail-Service

    return NextResponse.json({ message: 'Nachricht erfolgreich gesendet' })
} catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    )
  }
}
