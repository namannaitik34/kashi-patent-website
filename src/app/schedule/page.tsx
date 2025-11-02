"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { services } from '@/lib/services'
import { toast } from '@/hooks/use-toast'

export default function SchedulePage() {
  const searchParams = useSearchParams()
  const preService = searchParams?.get('service') || ''

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [serviceSlug, setServiceSlug] = useState(preService)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    if (preService) setServiceSlug(preService)
  }, [preService])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd post this to an API. For now show a toast confirmation.
    toast({
      title: 'Consultancy Scheduled',
      description: (
        <span>
          Thanks {name || 'there'} — we've received your request for {serviceSlug || 'a consultation'} on {date} at {time}. We'll contact you at {email || phone} to confirm.
        </span>
      ),
    })

    // Reset minimal fields
    setName('')
    setEmail('')
    setPhone('')
    setDate('')
    setTime('')
    setNotes('')
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Schedule a Free Consultancy</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Choose a convenient date and time and we'll reach out to confirm the meeting.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">What to expect</CardTitle>
              <CardDescription>Our short, focused consultancy session will help scope your needs and provide a tailored quote.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>15-30 minute initial discussion</li>
                <li>Review of your invention or design</li>
                <li>Estimated timelines and pricing</li>
                <li>Next steps and deliverables</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Request a Consultancy Slot</CardTitle>
              <CardDescription>Fill the form below and we'll confirm the booking shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 9xx xxxx xxx" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <Select value={serviceSlug} onValueChange={(v: string) => setServiceSlug(v)}>
                      <SelectTrigger>
                        <SelectValue>{serviceSlug || 'Select a service'}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.slug} value={s.slug}>
                            {s.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Share any context or files you think are relevant." rows={4} />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Request Slot</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
