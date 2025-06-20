import { Logo } from '@/components/ui'
import { useTranslations } from 'next-intl'
import { ContactSection } from './ContactSection'
import { LinksSection, MenuLinksSection } from './LinksSection'

export const Footer: React.FC = () => {
  // TODO: complete the links
  const widgetMenus: MenuLinksSection[] = [
    {
      title: 'categories',
      menus: [
        { href: '/', label: 'shopAll' },
        { href: '/', label: 'deckboxs' },
        { href: '/', label: 'decoration' },
        { href: '/', label: 'miscellaneous' },
      ],
    },
    {
      title: 'navigate',
      menus: [
        { href: '/', label: 'myAccount' },
        { href: '/', label: 'whislist' },
        { href: '/', label: 'returnPolicity' },
        { href: '/', label: 'delivery' },
      ],
    },
  ]

  const t = useTranslations('components.footer')
  return (
    <div className="nc-Footer relative border-t border-neutral-200 py-20 lg:pt-28 lg:pb-24 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-10">
        <div className="col-span-2 grid grid-cols-4 gap-5 md:col-span-4 lg:flex lg:flex-col lg:md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="col-span-2 flex items-center dark:text-gray-200">{t('description')}</div>
        </div>
        {widgetMenus.map((item: MenuLinksSection, index) => (
          <LinksSection menu={item} index={index} key={`widgetFoterSection-${index}`} />
        ))}
        <ContactSection />
      </div>
    </div>
  )
}
