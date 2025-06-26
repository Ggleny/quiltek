import { IProductVariantOption } from '@/data/types'
import { FC } from 'react'

interface Props {
  colorOptions?: IProductVariantOption[]
}

export const ColorSwatches: FC<Props> = ({ colorOptions }) => {
  return (
    <div className="flex gap-2">
      {!colorOptions?.length ? (
        <div className="relative size-4 cursor-pointer overflow-hidden rounded-full"></div>
      ) : (
        colorOptions.map(({ name, swatch }) => (
          <div key={name} className="relative size-4 cursor-pointer overflow-hidden rounded-full">
            <div
              className="absolute inset-0 z-0 rounded-full"
              style={{
                backgroundColor: swatch?.color,
                backgroundImage: swatch?.image?.src ? `url(${swatch.image.src})` : undefined,
                backgroundSize: 'cover',
              }}
            />
          </div>
        ))
      )}
    </div>
  )
}
