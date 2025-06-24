import logoSvg from '@/images/quiltek.svg'
import Image from 'next/image'
import React from 'react'
import { Link } from '../Link'

type LogoSize = 'xs' | 'sm' | 'md' | 'lg'

export interface LogoProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: LogoSize
  className?: string
}

const sizeClasses: Record<LogoSize, string> = {
  xs: 'w-12 h-12', // 3rem (48px)  -> 6rem/2
  sm: 'w-16 h-16', // 4rem (64px)  -> 6rem/1.5
  md: 'w-20 h-20', // 5rem (80px)  -> 6rem/1.2
  lg: 'w-24 h-24', // 6rem (96px)  -> Base
}

const logoSizes: Record<LogoSize, number> = {
  xs: 48, // 3rem
  sm: 64, // 4rem
  md: 80, // 5rem
  lg: 96, // 6rem
}

export const Logo: React.FC<LogoProps> = ({ size = 'xl', className = '' }) => {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 text-neutral-950 dark:text-neutral-50 ${sizeClasses[size]} ${className}`}
    >
      <Image src={logoSvg} alt="quiltek logo" className={`${sizeClasses[size]}`} width={logoSizes[size]} />
    </Link>
  )
}
