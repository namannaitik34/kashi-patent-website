"use client";

import Image from 'next/image';
import { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast'

export default function Newsletter() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement
        const fd = new FormData(form)
        const email = fd.get('email')?.toString() || ''
        if (!email) return

        try {
            setIsSubmitting(true)
            const res = await fetch('/api/submissions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'newsletter', email }),
            })

            if (!res.ok) {
                let err = 'Subscription failed'
                try { const json = await res.json(); err = json?.error || json?.message || err } catch {}
                toast({ title: 'Subscription error', description: String(err) })
                return
            }

            toast({ title: 'Subscribed', description: `Thanks — we received your subscription for ${email}.` })
            form.reset()
        } catch (err: any) {
            console.error(err)
            toast({ title: 'Subscription error', description: err?.message || 'There was a problem subscribing.' })
        } finally {
            setIsSubmitting(false)
        }
    };

    return (
        <section id="newsletter" className=" bg-background">
            <div className="container">
                <div className="relative bg-primary rounded-2xl p-8 md:p-12 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div className="hidden md:flex items-center justify-center relative">
                            <h3 className="font-headline text-8xl lg:text-9xl font-bold text-primary-foreground/10 select-none">
                                Protect
                            </h3>
                             <h3 className="absolute font-headline text-5xl lg:text-6xl font-bold text-primary-foreground/80 select-none mt-16">
                                Your Brilliance
                            </h3>
                        </div>
                        <div className="text-primary-foreground text-center md:text-left">
                            <h2 className="font-headline text-4xl font-bold">Stay Updated with Patent News & Tips</h2>
                            <p className="mt-4 text-lg text-primary-foreground/80">Join our newsletter to receive the latest updates, industry news, and exclusive tips directly in your inbox.</p>
                            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="bg-primary-foreground/20 border-primary-foreground/50 text-primary-foreground placeholder:text-primary-foreground/70 flex-grow"
                                    aria-label="Email address"
                                    required
                                />
                                <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                                    <Send className="mr-2 h-4 w-4" />
                                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-foreground/10 rounded-full translate-x-1/2 translate-y-1/2" />
                </div>
            </div>
        </section>
    )
}
