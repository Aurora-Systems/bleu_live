import type { ReactNode } from 'react'

/** Centered 1180px content column with the standard side padding. */
export function Container({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  )
}

/** Uppercase brand section label. */
export function Eyebrow({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.18em] text-brand ${className}`}
    >
      {children}
    </div>
  )
}

/**
 * Renders a real image when `src` is given, otherwise a dashed placeholder.
 * Sizing / rounding / aspect ratio all come from `className`, and are kept in
 * both states. Use `fit="contain"` for transparent phone mockups (pair it with
 * a background such as `bg-tint`), and the default `fit="cover"` for photos.
 */
export function ImageSlot({
  className = '',
  children = 'Image placeholder',
  src,
  alt = '',
  fit = 'cover',
}: {
  className?: string
  children?: ReactNode
  src?: string
  alt?: string
  fit?: 'cover' | 'contain'
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- remote CDN asset */}
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full ${
            fit === 'contain' ? 'object-contain' : 'object-cover'
          }`}
        />
      </div>
    )
  }
  return <div className={`imgslot ${className}`}>{children}</div>
}

/** Centered interior-page header: eyebrow, large heading and optional lead. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  pill,
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  /** Optional coming-soon style badge above the heading. */
  pill?: ReactNode
}) {
  return (
    <section className="pb-6 pt-14 sm:pt-20">
      <Container className="max-w-[820px] text-center">
        {pill ? (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-tint px-4 py-2 font-sans text-[13px] font-semibold leading-none text-brand">
            {pill}
          </div>
        ) : null}
        {eyebrow ? <Eyebrow className="mb-4 flex justify-center">{eyebrow}</Eyebrow> : null}
        <h1 className="m-0 mb-4 font-display text-[32px] font-normal leading-[1.06] text-ink sm:text-[44px] lg:text-[52px]">
          {title}
        </h1>
        {subtitle ? (
          <p className="m-0 mx-auto max-w-[620px] font-sans text-[18px] font-medium leading-[1.6] text-body">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  )
}

/** Left-aligned section heading with an optional eyebrow. */
export function SectionHeading({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow?: string
  title: ReactNode
  center?: boolean
}) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow ? (
        <Eyebrow className={`mb-3 ${center ? 'flex justify-center' : ''}`}>{eyebrow}</Eyebrow>
      ) : null}
      <h2 className="m-0 font-display text-[28px] font-normal leading-[1.08] text-ink sm:text-[34px] lg:text-[40px]">
        {title}
      </h2>
    </div>
  )
}
