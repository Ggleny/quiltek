// Tipos auxiliares
export interface IImageAsset {
  src: string
  width: number
  height: number
  alt: string
  format?: 'webp' | 'jpg' | 'png'
}

export interface ISwatch {
  color: string // Ejemplo: '#000000' o 'oklch(42.1% 0.095 57.708)'
  image?: IImageAsset | null
}

export interface IProductVariantOption {
  name: string
  value: string
  swatch?: ISwatch
}

export interface IProductOption {
  id: string
  name: string
  values: IProductVariantOption[]
}

export interface IPrice {
  amount: number
  currency: string // USD, EUR, etc.
  discountedAmount?: number
}

// Interfaz principal
export interface IProduct {
  id: string // Ejemplo: 'gid://1001'
  title: string
  handle: string
  description?: string
  createdAt: Date | string
  updatedAt?: Date | string
  vendor: string
  price: IPrice
  featuredImage: IImageAsset
  images: IImageAsset[]
  reviews?: {
    count: number
    averageRating: number
  }
  status?: 'New in' | 'Back in stock' | 'Limited edition' | string
  options: IProductOption[]
  variants: {
    id: string
    sku: string
    available: boolean
    price: IPrice
    selectedOptions: IProductVariantOption[]
    inventory?: number
  }[]
  seo?: {
    title?: string
    description?: string
  }
}
