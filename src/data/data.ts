import { default as heroImage1 } from '@/images/hero-1.png'
import { default as heroImage2 } from '@/images/hero-2.png'

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
