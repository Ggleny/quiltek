'use client'

import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { useInterval } from 'react-use'

import { HeroControls, HeroDots, HeroSlide } from '@/components/ui'
import { heroData } from '@/data/data'

export interface SectionHeroProps {
  className?: string
}

let TIME_OUT: NodeJS.Timeout | null = null

export const SectionHero: FC<SectionHeroProps> = ({ className = '' }) => {
  const [isSlided, setIsSlided] = useState(false)
  const [indexActive, setIndexActive] = useState(0)
  const [isRunning, toggleIsRunning] = useState(true)

  const handlers = useSwipeable({
    onSwipedLeft: () => handleClickNext(),
    onSwipedRight: () => handleClickPrev(),
    trackMouse: true,
  })

  useEffect(() => {
    if (isSlided || !indexActive) return
    setIsSlided(true)
  }, [indexActive, isSlided])

  useInterval(() => handleAutoNext(), isRunning ? 5000 : 999999)

  const handleAutoNext = () => setIndexActive((prev) => (prev >= heroData.length - 1 ? 0 : prev + 1))

  const handleClickNext = () => {
    setIndexActive((prev) => (prev >= heroData.length - 1 ? 0 : prev + 1))
    handleAfterClick()
  }

  const handleClickPrev = () => {
    setIndexActive((prev) => (prev === 0 ? heroData.length - 1 : prev - 1))
    handleAfterClick()
  }

  const handleAfterClick = () => {
    toggleIsRunning(false)
    if (TIME_OUT) clearTimeout(TIME_OUT)
    TIME_OUT = setTimeout(() => toggleIsRunning(true), 1000)
  }

  return (
    <div className={clsx('relative z-[1]', className)} {...handlers}>
      {heroData.map((item, index) => (
        <HeroSlide key={index} index={index} isActive={index === indexActive} item={item} />
      ))}
      <HeroDots
        length={heroData.length}
        activeIndex={indexActive}
        onDotClick={(i) => {
          setIndexActive(i)
          handleAfterClick()
        }}
      />
      <HeroControls onNext={handleClickNext} onPrev={handleClickPrev} />
    </div>
  )
}
