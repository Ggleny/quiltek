import { ButtonPrimary } from '@/components/ui'
import { IProduct } from '@/data/types'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { HeaderFilterSection } from '../HeaderFilterSection'
import ProductItem from '../ProductItem/ProductItem'
export interface SectionCollectionProps {
  data: IProduct[]
}

export const SectionCollection: FC<SectionCollectionProps> = ({ data }) => {
  const t = useTranslations('components.sectionCollection')
  return (
    <div className="nc-SectionGridFeatureItems relative">
      <HeaderFilterSection heading="Find your favorite products." />
      <div className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
        {data.map((item) => (
          <ProductItem data={item} key={item.id} />
        ))}
      </div>
      <div className="mt-16 flex items-center justify-center">
        <ButtonPrimary href="/collections/all">
          {t('showMore')}
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
            className="ms-2 h-5 w-5"
          />
        </ButtonPrimary>
      </div>
    </div>
  )
}
