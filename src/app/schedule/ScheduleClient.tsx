"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { services } from '@/lib/services'
import { toast } from '@/hooks/use-toast'
import Image from 'next/image'
import { Calendar } from 'lucide-react'

export default function ScheduleClient() {
  const searchParams = useSearchParams()
  const preService = searchParams?.get('service') || ''

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [serviceSlug, setServiceSlug] = useState(preService)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [notes, setNotes] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (preService) setServiceSlug(preService)
  }, [preService])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const fd = new FormData()
    // append access_key and controlled values
    fd.append('access_key', 'f7c68485-dc33-4964-bb50-6a521e8a2d7d')
    fd.append('type', 'schedule')
    fd.append('name', name)
    fd.append('email', email)
    fd.append('phone', phone)
    fd.append('service', serviceSlug)
    fd.append('date', date)
    fd.append('time', time)
    fd.append('notes', notes)

    try {
      setIsSubmitting(true)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      })

      const text = await res.text().catch(() => '')
      let json: any = null
      try { json = text ? JSON.parse(text) : null } catch {}

      if (!res.ok) {
        const err = json?.error || json?.message || text || 'Submission failed'
        toast({ title: 'Submission error', description: String(err) })
        return
      }

      toast({
        title: 'Consultancy Requested',
        description: (
          <span>
            Thanks {name || 'there'} — we've received your request for {serviceSlug || 'a consultation'} on {date} at {time}. We'll contact you at {email || phone} to confirm.
          </span>
        ),
      })

      setName('')
      setEmail('')
      setPhone('')
      setDate('')
      setTime('')
      setNotes('')
    } catch (err: any) {
      console.error(err)
      toast({ title: 'Submission error', description: err?.message || 'There was a problem sending your request.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedService = services.find((s) => s.slug === serviceSlug)

  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Schedule a Free Consultancy</h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">Pick a date & time that works for you. We'll follow up to confirm the slot and share meeting details.</p>
        </div>

        <div className="bg-card rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 bg-gradient-to-b from-primary/6 to-transparent flex flex-col justify-center gap-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Free 15-30 minute consultation</h3>
                <p className="text-sm text-muted-foreground">A focused call to scope your project and provide a tailored plan.</p>
              </div>
            </div>

            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary mr-1">•</span> Quick project assessment</li>
              <li className="flex items-start gap-2"><span className="text-primary mr-1">•</span> Estimate & timeline</li>
              <li className="flex items-start gap-2"><span className="text-primary mr-1">•</span> File & reference checklist</li>
            </ul>

            <div className="mt-4 hidden md:block">
              <Image src="/images/logo.png" alt="Kashi Patent" width={160} height={60} className="opacity-80" />
            </div>
          </div>

          <div className="p-8 bg-background">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Optional" />
                </div>
                <div>
                  <Label htmlFor="service">Service</Label>
                  <Select value={serviceSlug} onValueChange={(v: string) => setServiceSlug(v)}>
                    <SelectTrigger>
                      <SelectValue>{serviceSlug ? (selectedService?.title ?? serviceSlug) : 'Select a service'}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Preferred date</Label>
                  <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="time">Preferred time</Label>
                  <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything you'd like us to review ahead of time" rows={4} />
              </div>

              <div className="flex items-center gap-3">
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Request Slot'}
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact">Need help?</a>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
