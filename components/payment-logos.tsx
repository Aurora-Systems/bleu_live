import { Container, Eyebrow } from '@/components/site'

/**
 * Payment methods Bleu accepts. Logo files live in /public/logos. `dark` puts a
 * white-on-transparent logo on a navy badge so it stays visible on white tiles.
 * An entry without `src` renders its name as a wordmark until a logo is added.
 */
const METHODS: { name: string; src?: string; className: string; dark?: boolean }[] = [
  { name: 'EcoCash', src: '/logos/ecocash.png', className: 'max-h-7' },
  { name: 'InnBucks', src: '/logos/innbucks.png', className: 'max-h-11 rounded-md' },
  { name: "O'mari", src: '/logos/omari.png', className: 'max-h-7', dark: true },
  { name: 'Smile Cash', className: '' },
  { name: 'ZimSwitch', src: '/logos/zimswitch.svg', className: 'max-h-11' },
  { name: 'Visa', src: '/logos/visa.svg', className: 'max-h-6' },
  { name: 'Mastercard', src: '/logos/mastercard.svg', className: 'max-h-10' },
]

/** Row of accepted payment-method logos, used under the home and business heroes. */
export function PaymentLogos({
  title = 'Accept payments from',
  className = '',
}: {
  title?: string
  className?: string
}) {
  return (
    <section className={`pb-10 ${className}`}>
      <Container>
        <Eyebrow className="mb-5 flex justify-center">{title}</Eyebrow>
        <ul className="m-0 flex list-none flex-wrap justify-center gap-3 p-0">
          {METHODS.map(({ name, src, className: logoClass, dark }) => (
            <li
              key={name}
              className="flex h-[76px] w-[calc(50%-6px)] items-center justify-center rounded-xl border border-line bg-surface px-3 sm:w-[144px]"
            >
              {src ? (
                <span className={`flex max-w-full ${dark ? 'rounded-md bg-ink px-3 py-2' : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- small static logo */}
                  <img src={src} alt={name} className={`block h-auto w-auto max-w-full ${logoClass}`} />
                </span>
              ) : (
                <span className="font-display text-[19px] font-medium leading-none text-ink">
                  {name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
