import { ICustomLink } from '@/data/types'
import { useTranslations } from 'next-intl'

export interface MenuLinksSection {
  title: string
  menus: ICustomLink[]
}
export const LinksSection = ({ menu, index }: { menu: MenuLinksSection; index: number }) => {
  const t = useTranslations('components.linksSection')
  return (
    <div key={index}>
      <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">{t(menu.title)}</h2>
      <ul className="mt-5 space-y-3">
        {menu.menus.map((item, index) => (
          <li key={index} className="text-sm">
            <a
              key={index}
              className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(item.label)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
