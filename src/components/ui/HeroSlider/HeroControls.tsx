import { FC } from 'react'

interface Props {
  onNext: () => void
  onPrev: () => void
}

export const HeroControls: FC<Props> = ({ onNext, onPrev }) => (
  <>
    <button
      type="button"
      className="absolute inset-y-px end-0 z-10 hidden items-center justify-center px-10 text-neutral-700 lg:flex"
      onClick={onNext}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={0.6}
        stroke="currentColor"
        className="h-12 w-12"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
    <button
      type="button"
      className="absolute inset-y-px start-0 z-10 hidden items-center justify-center px-10 text-neutral-700 lg:flex"
      onClick={onPrev}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={0.6}
        stroke="currentColor"
        className="h-12 w-12"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
  </>
)
