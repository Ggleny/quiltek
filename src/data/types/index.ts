import { Route } from 'next'

export interface ICustomLink {
  label: string
  href: Route
  targetBlank?: boolean
}

export * from './product.interfaces'
