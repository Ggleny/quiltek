import { SectionCollection } from '@/components/features/SectionCollection/SectionCollection'
import { SectionHero } from '@/components/features/SectionHero'
import { mockProducts } from '@/data/data'
import { IProduct } from '@/data/types'
import { Metadata } from 'next'

//TODO Complete
export const metadata: Metadata = {
  title: 'Home',
  description: '',
}

export default function HomePage() {
  const data: IProduct[] = mockProducts
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <SectionHero />
      <div className="relative container my-24 flex flex-col gap-y-24 lg:my-36 lg:gap-y-36">
        <SectionCollection data={data} />
      </div>
    </div>
  )
}
