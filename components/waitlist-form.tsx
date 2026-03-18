"use client"

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Loader2, CheckCircle2, User, Building2 } from 'lucide-react'

interface WaitlistFormProps {
  variant?: 'hero' | 'section'
}

export function WaitlistForm({ variant = 'section' }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    user_type: 'individual',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const supabase = createClient()
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([formData])

      if (supabaseError) {
        throw supabaseError
      }

      setIsSuccess(true)
      setFormData({ full_name: '', email: '', phone: '', user_type: 'individual' })
    } catch (err) {
      console.error('Waitlist submission error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isHero = variant === 'hero'
  const cardClass = isHero ? 'glass-card-white' : 'glass-card-blue'
  const textClass = isHero ? 'text-white' : 'text-foreground'
  const mutedTextClass = isHero ? 'text-white/70' : 'text-muted-foreground'
  const inputClass = isHero 
    ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20' 
    : 'bg-white border-primary/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20'

  if (isSuccess) {
    return (
      <div className={`rounded-2xl p-8 text-center ${cardClass}`}>
        <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${isHero ? 'bg-green-400/20' : 'bg-green-100'}`}>
          <CheckCircle2 className={`h-8 w-8 ${isHero ? 'text-green-300' : 'text-green-600'}`} />
        </div>
        <h3 className={`font-display text-xl font-bold ${textClass}`}>
          You&apos;re on the list
        </h3>
        <p className={`mt-2 ${mutedTextClass}`}>
          We&apos;ll be in touch soon with updates.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`rounded-2xl p-6 md:p-8 ${cardClass}`}>
      <div className="space-y-5">
        <div>
          <label htmlFor="full_name" className={`block text-sm font-medium ${textClass}`}>
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            required
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            className={`mt-2 block w-full rounded-xl border px-4 py-3.5 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 ${inputClass}`}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className={`block text-sm font-medium ${textClass}`}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`mt-2 block w-full rounded-xl border px-4 py-3.5 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 ${inputClass}`}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className={`block text-sm font-medium ${textClass}`}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`mt-2 block w-full rounded-xl border px-4 py-3.5 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 ${inputClass}`}
            placeholder="+234 800 000 0000"
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-3 ${textClass}`}>
            I am a
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label 
              className={`flex items-center justify-center gap-2 rounded-xl border p-4 cursor-pointer transition-all ${
                formData.user_type === 'individual' 
                  ? isHero 
                    ? 'border-white bg-white/20 text-white' 
                    : 'border-primary bg-primary/10 text-primary'
                  : isHero
                    ? 'border-white/20 bg-white/5 text-white/80 hover:bg-white/10'
                    : 'border-primary/10 bg-white text-muted-foreground hover:bg-primary/5'
              }`}
            >
              <input
                type="radio"
                name="user_type"
                value="individual"
                checked={formData.user_type === 'individual'}
                onChange={(e) => setFormData({ ...formData, user_type: e.target.value })}
                className="sr-only"
              />
              <User className="h-5 w-5" />
              <span className="font-medium">Individual</span>
            </label>
            <label 
              className={`flex items-center justify-center gap-2 rounded-xl border p-4 cursor-pointer transition-all ${
                formData.user_type === 'business' 
                  ? isHero 
                    ? 'border-white bg-white/20 text-white' 
                    : 'border-primary bg-primary/10 text-primary'
                  : isHero
                    ? 'border-white/20 bg-white/5 text-white/80 hover:bg-white/10'
                    : 'border-primary/10 bg-white text-muted-foreground hover:bg-primary/5'
              }`}
            >
              <input
                type="radio"
                name="user_type"
                value="business"
                checked={formData.user_type === 'business'}
                onChange={(e) => setFormData({ ...formData, user_type: e.target.value })}
                className="sr-only"
              />
              <Building2 className="h-5 w-5" />
              <span className="font-medium">Business</span>
            </label>
          </div>
        </div>

        {error && (
          <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3">
            <p className="text-sm text-red-500">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-xl px-6 py-4 font-semibold shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
            isHero 
              ? 'bg-white text-primary hover:bg-white/90' 
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Joining...
            </span>
          ) : (
            'Join Waitlist'
          )}
        </button>
      </div>
    </form>
  )
}
