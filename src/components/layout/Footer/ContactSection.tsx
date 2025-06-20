const SITE_EMAIL_CONTACT = process.env.NEXT_PUBLIC_SITE_EMAIL
const SITE_ADDRESS_CONTACT = process.env.NEXT_PUBLIC_SITE_ADDRESS || ''
const SITE_WHATSAPP_CONTACT = process.env.NEXT_PUBLIC_SITE_WHATSAPP

import { Mail01Icon, MapsLocation01Icon, WhatsappIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslations } from 'next-intl'

export const ContactSection = () => {
  const t = useTranslations('components.contactSection')

  const whatsappNumber = SITE_WHATSAPP_CONTACT?.replace(/\D/g, '') // Remove non-digit characters
  const defaultMessage = t('whatsappMessage')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
  const mapsUrl = `https://maps.google.com?q=${encodeURIComponent(SITE_ADDRESS_CONTACT)}`

  const emailUrl = `mailto:${SITE_EMAIL_CONTACT}`

  return (
    <div>
      <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">{t('title')}</h2>
      <ul className="mt-5 space-y-3">
        <li className="text-sm">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="justify-left flex items-center gap-x-1.5 text-xs text-neutral-600 hover:underline sm:gap-x-2.5 sm:text-sm dark:text-neutral-300 dark:hover:text-white"
          >
            <span className="inline-block">
              <HugeiconsIcon icon={MapsLocation01Icon} size={24} color="currentColor" strokeWidth={1.5} />
            </span>
            <span>{SITE_ADDRESS_CONTACT}</span>
          </a>
        </li>
        <li className="text-sm">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="justify-left flex items-center gap-x-1.5 text-xs text-neutral-600 hover:underline sm:gap-x-2.5 sm:text-sm dark:text-neutral-300 dark:hover:text-white"
          >
            <span className="inline-block">
              <HugeiconsIcon icon={WhatsappIcon} size={24} color="rgb(37, 211, 102)" strokeWidth={1.5} />
            </span>
            <span>{SITE_WHATSAPP_CONTACT}</span>
          </a>
        </li>
        <li className="text-sm">
          <a
            href={emailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="justify-left flex items-center gap-x-1.5 text-xs text-neutral-600 hover:underline sm:gap-x-2.5 sm:text-sm dark:text-neutral-300 dark:hover:text-white"
          >
            <span className="inline-block">
              <HugeiconsIcon icon={Mail01Icon} size={24} color="currentColor" strokeWidth={1.5} />
            </span>
            <span>{SITE_EMAIL_CONTACT}</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
