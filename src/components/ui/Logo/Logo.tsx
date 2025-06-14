import React from 'react'
import Link from '../Link'

export interface LogoProps extends React.ComponentPropsWithoutRef<'svg'> {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className = 'shrink-0', ...props }) => {
  return (
    <Link href="/" className={`flex text-neutral-950 dark:text-neutral-50 ${className}`}>
      LOGO
    </Link>
  )
}
