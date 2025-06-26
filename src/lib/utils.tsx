import { IProduct, IProductVariantOption } from '@/data/types'
import { ReadonlyURLSearchParams } from 'next/navigation'

export const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3001'

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`

export const getFirstVariant = (product: IProduct) => product.variants?.[0]

export const extractOptionValue = (options: IProductVariantOption[] = [], name: string): string =>
  options.find((option) => option.name.toLowerCase() === name.toLowerCase())?.value || ''

export const getColorOption = (options: IProduct['options']) =>
  options.find((option) => option.name.toLowerCase() === 'color')
