"use client"

import { useState } from 'react'
import { Loader2, Check, User, Building2 } from 'lucide-react'

export function WaitlistForm() {
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
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong.')
      }

      setIsSuccess(true)
      setFormData({ full_name: '', email: '', phone: '', user_type: 'individual' })
    } catch (err) {
      console.error('Waitlist submission error:', err)
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-2xl bg-surface p-8 text-center shadow-[0_18px_50px_rgba(16,26,51,0.14)]">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-tint text-brand">
          <Check size={28} />
        </div>
        <h3 className="m-0 font-display text-[20px] font-normal text-ink">You&apos;re on the list</h3>
        <p className="m-0 mt-2 font-sans text-[15px] font-medium text-body-2">
          We&apos;ll be in touch soon with updates.
        </p>
      </div>
    )
  }

  const inputClass =
    'mt-2 block w-full rounded-xl border border-line-2 bg-surface px-4 py-3.5 font-sans text-[15px] text-ink placeholder:text-caption transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-surface p-6 shadow-[0_18px_50px_rgba(16,26,51,0.14)] md:p-8"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="full_name" className="block font-sans text-[14px] font-semibold text-ink">
            Full name
          </label>
          <input
            type="text"
            id="full_name"
            required
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            className={inputClass}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-sans text-[14px] font-semibold text-ink">
            Email address
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-sans text-[14px] font-semibold text-ink">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass}
            placeholder="+263 000 000 000"
          />
        </div>

        <div>
          <span className="mb-3 block font-sans text-[14px] font-semibold text-ink">I am a</span>
          <div className="grid grid-cols-2 gap-3">
            {(
              [
                { value: 'individual', label: 'Individual', Icon: User },
                { value: 'business', label: 'Business', Icon: Building2 },
              ] as const
            ).map(({ value, label, Icon }) => {
              const selected = formData.user_type === value
              return (
                <label
                  key={value}
                  className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border p-4 font-sans text-[14px] font-semibold transition-colors ${
                    selected
                      ? 'border-brand bg-tint text-brand'
                      : 'border-line-2 bg-surface text-body-2 hover:border-brand/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="user_type"
                    value={value}
                    checked={selected}
                    onChange={(e) => setFormData({ ...formData, user_type: e.target.value })}
                    className="sr-only"
                  />
                  <Icon size={18} />
                  <span>{label}</span>
                </label>
              )
            })}
          </div>
        </div>

        {error && (
          <div className="rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3">
            <p className="m-0 font-sans text-[14px] text-destructive">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-brand px-6 py-4 font-sans text-[15px] font-bold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 size={18} className="animate-spin" />
              Joining…
            </span>
          ) : (
            'Join the waitlist'
          )}
        </button>
      </div>
    </form>
  )
}
