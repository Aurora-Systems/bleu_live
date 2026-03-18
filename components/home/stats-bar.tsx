const stats = [
  { value: '500+', label: 'Loans Disbursed', icon: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )},
  { value: '120+', label: 'Businesses Supported', icon: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )},
  { value: '4', label: 'Countries', icon: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )},
]

export function StatsBar() {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="glass-card-blue rounded-2xl p-8 md:p-10 shadow-xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className="relative text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                </div>
                <p className="font-mono-display text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
                {index < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-primary/10 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
