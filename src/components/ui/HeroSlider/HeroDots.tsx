import { FC } from 'react'

interface Props {
  length: number
  activeIndex: number
  onDotClick: (index: number) => void
}

export const HeroDots: FC<Props> = ({ length, activeIndex, onDotClick }) => {
  return (
    <div className="absolute start-1/2 bottom-4 flex -translate-x-1/2 justify-center rtl:translate-x-1/2">
      {Array.from({ length }).map((_, index) => (
        <div key={index} onClick={() => onDotClick(index)} className="relative cursor-pointer px-1 py-1.5">
          <div className="relative h-1 w-20 rounded-md bg-white shadow-xs">
            {index === activeIndex && (
              <div className="absolute inset-0 rounded-md bg-neutral-900 fade--animation__dot" />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
