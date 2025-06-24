import backgroundLineSvg from '@/images/Moon.svg'
import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { ButtonPrimary } from '../Button'

interface Props {
  index: number
  isActive: boolean
  item: {
    heading: string
    subHeading: string
    btnText: string
    btnHref: string
    imageUrl: string
    bgClass: string
  }
}

export const HeroSlide: FC<Props> = ({ index, isActive, item }) => {
  return (
    <div
      className={clsx(
        'fade--animation relative flex flex-col gap-10 overflow-hidden py-14 pl-container sm:min-h-[calc(100vh-5rem)] lg:flex-row lg:items-center',
        isActive ? 'flex' : 'hidden'
      )}
      key={index}
    >
      <div className={clsx('absolute inset-0 -z-10', item.bgClass)}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute h-full w-full object-contain"
          src={backgroundLineSvg}
          alt="hero"
        />
      </div>

      <div className="relative flex flex-1/2 flex-col items-start fade--animation__left">
        <span className="block text-base font-medium text-neutral-700 fade--animation__subheading md:text-xl">
          {item.subHeading}
        </span>
        <h2
          className="mt-5 text-4xl font-semibold text-neutral-900 fade--animation__heading sm:mt-6 md:text-5xl xl:text-6xl xl:leading-[1.2] 2xl:text-7xl"
          dangerouslySetInnerHTML={{ __html: item.heading }}
        />
        <ButtonPrimary
          className="mt-10 fade--animation__button sm:mt-20 dark:bg-neutral-900 dark:text-white"
          sizeClass="py-3 px-6 sm:py-5 sm:px-9"
          href={item.btnHref}
        >
          <span>{item.btnText}</span>
          <HugeiconsIcon icon={Search01Icon} size={20} color="currentColor" className="ms-2.5" strokeWidth={1.5} />
        </ButtonPrimary>
      </div>

      <div className="relative -z-10 flex-1/2 lg:pr-10">
        <Image
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain fade--animation__image select-none"
          src={item.imageUrl}
          alt={item.heading}
          width={790}
          height={790}
          priority
        />
      </div>
    </div>
  )
}
