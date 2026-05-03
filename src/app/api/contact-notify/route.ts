import { NextRequest, NextResponse } from 'next/server'

interface NotifyPayload {
  name?: string
  email?: string
  phone?: string
  program?: string
  message?: string
}

const ALLOWED_HOST_SUFFIXES = [
  'allladiestimd.com',
  'localhost:3000',
  '.vercel.app',
]

function originIsAllowed(request: NextRequest): boolean {
  const source = request.headers.get('origin') ?? request.headers.get('referer') ?? ''
  if (!source) return false
  try {
    const host = new URL(source).host
    return ALLOWED_HOST_SUFFIXES.some((suffix) =>
      suffix.startsWith('.') ? host.endsWith(suffix) : host === suffix
    )
  } catch {
    return false
  }
}

function buildMessage(data: NotifyPayload): string {
  const lines = [
    '*New ALMA contact form submission*',
    `Name: ${data.name ?? ''}`,
    `Email: ${data.email ?? ''}`,
    `Phone: ${data.phone ?? ''}`,
    `Program: ${data.program ?? ''}`,
    data.message ? `Message: ${data.message}` : '',
  ].filter(Boolean)
  return lines.join('\n')
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  if (!originIsAllowed(request)) {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 })
  }

  const phone = process.env.CALLMEBOT_PHONE
  const apiKey = process.env.CALLMEBOT_APIKEY
  if (!phone || !apiKey) {
    return NextResponse.json({ error: 'not_configured' }, { status: 500 })
  }

  let payload: NotifyPayload
  try {
    payload = (await request.json()) as NotifyPayload
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const url =
    `https://api.callmebot.com/whatsapp.php` +
    `?phone=${encodeURIComponent(phone)}` +
    `&text=${encodeURIComponent(buildMessage(payload))}` +
    `&apikey=${encodeURIComponent(apiKey)}`

  try {
    await fetch(url, { method: 'GET' })
  } catch {
    // CallMeBot delivery is best-effort; don't fail the user submission
  }

  return NextResponse.json({ ok: true })
}
