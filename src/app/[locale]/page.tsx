import { SectionHero } from '@/components/features/SectionHero'
import { Metadata } from 'next'

//TODO Complete
export const metadata: Metadata = {
  title: 'Home',
  description: '',
}

export default function HomePage() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <SectionHero />
    </div>
  )
}
