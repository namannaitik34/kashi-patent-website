import { NextResponse } from 'next/server'

type SubmissionBody = {
  type?: string
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  service?: string
  date?: string
  time?: string
  notes?: string
  data?: any
}

export async function POST(req: Request) {
  try {
    const body: SubmissionBody = await req.json()

    console.log('[submissions] Incoming payload:', JSON.stringify(body))

    const appsUrl = process.env.APPS_SCRIPT_URL || ''
    const appsSecret = process.env.APPS_SCRIPT_SECRET || ''

    if (!appsUrl) {
      console.error('[submissions] APPS_SCRIPT_URL is not configured')
      return NextResponse.json({ error: 'APPS_SCRIPT_URL not configured' }, { status: 500 })
    }

    if (!appsSecret) {
      console.error('[submissions] APPS_SCRIPT_SECRET is not configured')
      return NextResponse.json({ error: 'APPS_SCRIPT_SECRET not configured' }, { status: 500 })
    }

    // Inject secret for Apps Script verification
    const outgoing = { ...body, secret: appsSecret }

    console.log('[submissions] Forwarding to Apps Script:', appsUrl)

    const res = await fetch(appsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(outgoing),
    })

    const text = await res.text().catch(() => '')
    let parsed: any = null
    try { parsed = text ? JSON.parse(text) : null } catch {}

    if (res.ok) {
      return NextResponse.json(parsed ?? { ok: true }, { status: res.status })
    }

    const errMsg = parsed?.error || parsed?.message || text || `Upstream error ${res.status}`
    console.error('[submissions] Apps Script error:', errMsg)
    return NextResponse.json({ ok: false, status: res.status, error: errMsg }, { status: Math.max(500, res.status) })
  } catch (err) {
    console.error('[submissions] Internal error handling submission:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
