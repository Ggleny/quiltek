import { default as heroImage1 } from '@/images/hero-1.png'
import { default as heroImage2 } from '@/images/hero-2.png'
import { IProduct } from './types'

//TODO: change the texts to support multilanguage
export const heroData = [
  {
    id: 1,
    imageUrl: heroImage1.src,
    heading: 'Marvel Exclusive collection',
    subHeading: 'Limit Edition 🔥',
    btnText: 'Explore shop now',
    btnHref: '/collections/all',
    bgClass: 'bg-gradient-to-br from-[#FAFAFA] to-[#FFF2E2]',
  },
  {
    id: 2,
    imageUrl: heroImage2.src,
    heading: 'Guardá tu mazo <br /> con estilo legendario',
    subHeading: 'Deckboxes 3D exclusivas para cartas Magic 🧙‍♂️',
    btnText: 'Explorá modelos',
    btnHref: '/productos',
    bgClass: 'bg-gradient-to-br from-[#FAFAFA] to-[#FFF2E2]',
  },
  {
    id: 3,
    imageUrl: heroImage1.src,
    heading: 'Diseños únicos <br /> inspirados en tus colores de maná',
    subHeading: 'Elegí tu color favorito o combiná varios 🔮🔥🌿',
    btnText: 'Ver colecciones',
    btnHref: '/colecciones',
    bgClass: 'bg-gradient-to-br from-[#FAFAFA] to-[#FFF2E2]',
  },
]

export const mockProducts: IProduct[] = [
  {
    id: 'gid://shopify/Product/1',
    title: 'Classic White T-Shirt',
    handle: 'classic-white-tshirt',
    description: 'A timeless essential for every wardrobe.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    vendor: 'Basic Co.',
    price: {
      amount: 19.99,
      currency: 'USD',
      discountedAmount: 14.99,
    },
    featuredImage: {
      src: heroImage1.src,
      width: 600,
      height: 800,
      alt: 'White T-Shirt',
    },
    images: [],
    reviews: {
      count: 35,
      averageRating: 4.2,
    },
    status: 'New in',
    options: [
      {
        id: 'color',
        name: 'Color',
        values: [
          {
            name: 'White',
            value: 'White',
            swatch: { color: '#ffffff' },
          },
        ],
      },
    ],
    variants: [
      {
        id: 'v1',
        sku: 'WHITE-TS-001',
        available: true,
        price: {
          amount: 19.99,
          currency: 'USD',
          discountedAmount: 14.99,
        },
        selectedOptions: [{ name: 'Color', value: 'White' }],
        inventory: 10,
      },
    ],
  },
  {
    id: 'gid://shopify/Product/2',
    title: 'Denim Jeans',
    handle: 'denim-jeans',
    description: 'Comfort fit with a classic blue wash.',
    createdAt: new Date().toISOString(),
    vendor: 'Denim Bros.',
    price: {
      amount: 59.99,
      currency: 'USD',
    },
    featuredImage: {
      src: heroImage1.src,
      width: 600,
      height: 800,
      alt: 'Denim Jeans',
    },
    images: [],
    reviews: {
      count: 12,
      averageRating: 3.8,
    },
    status: 'Back in stock',
    options: [
      {
        id: 'color',
        name: 'Color',
        values: [
          {
            name: 'Blue',
            value: 'Blue',
            swatch: { color: '#264653' },
          },
        ],
      },
      {
        id: 'size',
        name: 'Size',
        values: [
          { name: 'M', value: 'M' },
          { name: 'L', value: 'L' },
        ],
      },
    ],
    variants: [
      {
        id: 'v2',
        sku: 'JEANS-BLUE-01',
        available: true,
        price: {
          amount: 59.99,
          currency: 'USD',
        },
        selectedOptions: [
          { name: 'Color', value: 'Blue' },
          { name: 'Size', value: 'M' },
        ],
      },
    ],
  },
  {
    id: 'gid://shopify/Product/3',
    title: 'Leather Wallet',
    handle: 'leather-wallet',
    createdAt: new Date().toISOString(),
    vendor: 'Craft Goods',
    price: {
      amount: 39.99,
      currency: 'USD',
    },
    featuredImage: {
      src: heroImage1.src,
      width: 600,
      height: 600,
      alt: 'Leather Wallet',
    },
    images: [],
    options: [],
    variants: [
      {
        id: 'v3',
        sku: 'WALLET-BROWN-01',
        available: true,
        price: {
          amount: 39.99,
          currency: 'USD',
        },
        selectedOptions: [],
      },
    ],
  },
  {
    id: 'gid://shopify/Product/4',
    title: 'Running Sneakers',
    handle: 'running-sneakers',
    createdAt: new Date().toISOString(),
    vendor: 'Sprint Ltd.',
    price: {
      amount: 89.99,
      currency: 'USD',
      discountedAmount: 69.99,
    },
    featuredImage: {
      src: heroImage1.src,
      width: 600,
      height: 600,
      alt: 'Running Sneakers',
    },
    images: [],
    reviews: {
      count: 24,
      averageRating: 4.5,
    },
    status: 'Limited edition',
    options: [
      {
        id: 'color',
        name: 'Color',
        values: [
          {
            name: 'Red',
            value: 'Red',
            swatch: { color: '#e63946' },
          },
        ],
      },
      {
        id: 'size',
        name: 'Size',
        values: [{ name: '42', value: '42' }],
      },
    ],
    variants: [
      {
        id: 'v4',
        sku: 'SNEAKERS-RED-42',
        available: true,
        price: {
          amount: 89.99,
          currency: 'USD',
          discountedAmount: 69.99,
        },
        selectedOptions: [
          { name: 'Color', value: 'Red' },
          { name: 'Size', value: '42' },
        ],
      },
    ],
  },
  {
    id: 'gid://shopify/Product/5',
    title: 'Wool Scarf',
    handle: 'wool-scarf',
    createdAt: new Date().toISOString(),
    vendor: 'Winter Co.',
    price: {
      amount: 29.99,
      currency: 'USD',
    },
    featuredImage: {
      src: heroImage1.src,
      width: 600,
      height: 600,
      alt: 'Wool Scarf',
    },
    images: [],
    options: [],
    variants: [
      {
        id: 'v5',
        sku: 'SCARF-WOOL-01',
        available: false,
        price: {
          amount: 29.99,
          currency: 'USD',
        },
        selectedOptions: [],
      },
    ],
  },
  {
    id: 'gid://shopify/Product/6',
    title: 'Basic Hoodie',
    handle: 'basic-hoodie',
    createdAt: new Date().toISOString(),
    vendor: 'Urban Wear',
    price: {
      amount: 49.99,
      currency: 'USD',
    },
    featuredImage: {
      src: heroImage1.src,
      width: 600,
      height: 800,
      alt: 'Basic Hoodie',
    },
    images: [],
    options: [
      {
        id: 'color',
        name: 'Color',
        values: [
          {
            name: 'Black',
            value: 'Black',
            swatch: { color: '#000000' },
          },
        ],
      },
    ],
    variants: [
      {
        id: 'v6',
        sku: 'HOODIE-BLACK-01',
        available: true,
        price: {
          amount: 49.99,
          currency: 'USD',
        },
        selectedOptions: [{ name: 'Color', value: 'Black' }],
      },
    ],
  },
]
