import type { ReactNode } from 'react'
import { Heading } from '../atoms/Heading'

interface ExplorerTemplateProps {
  header: ReactNode
  filters: ReactNode
  children: ReactNode
}

export function ExplorerTemplate({ header, filters, children }: ExplorerTemplateProps) {
  return (
    <div id="inicio" className="min-h-screen">
      {header}
      <main className="mx-auto max-w-7xl px-6 py-10 tablet:px-8">
        <Heading level={1} className="mb-6">
          Explorer
        </Heading>
        {filters}
        <section id="paises" aria-label="Países" className="scroll-mt-4">
          {children}
        </section>
      </main>
    </div>
  )
}