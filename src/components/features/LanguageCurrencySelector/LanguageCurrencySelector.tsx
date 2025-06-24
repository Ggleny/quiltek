'use client'

import { countriesWithCurrencies, IcountriesWithCurrencies } from '@/data/navigation'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowDown01Icon, Cancel01Icon, Globe02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC, Fragment, useState } from 'react'

interface LanguageCurrencySelectorProps {
  className?: string
}

export const LanguageCurrencySelector: FC<LanguageCurrencySelectorProps> = ({ className }) => {
  const t = useTranslations('components.languageCurrencySelector')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countriesWithCurrencies[0])
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <div className={className}>
        <button
          onClick={openModal}
          className={clsx(
            'flex items-center p-2.5 text-sm font-medium',
            'text-gray-800 focus:outline-none dark:text-neutral-200',
            '-m-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
          )}
          aria-label={t('title')}
        >
          <HugeiconsIcon icon={Globe02Icon} size={18} color="currentColor" className="ms-2.5" strokeWidth={1.5} />
          <span className="ms-2">{t('language')}</span>
          <HugeiconsIcon
            icon={ArrowDown01Icon}
            size={18}
            color="currentColor"
            className={clsx('ms-1 size-4 transition-transform duration-200', isOpen ? 'rotate-180' : '')}
            strokeWidth={1.5}
          />
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            leave="ease-in duration-200"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  <div className="mb-6 flex items-center justify-between border-b border-neutral-100 pb-4 dark:border-neutral-700">
                    <Dialog.Title
                      as="h3"
                      className="mx-10 w-full text-base font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200"
                    >
                      {t('title')}
                    </Dialog.Title>
                    <button type="button" className="rounded-full p-2 hover:bg-gray-100" onClick={closeModal}>
                      <HugeiconsIcon
                        icon={Cancel01Icon}
                        size={18}
                        color="currentColor"
                        className="h-6 w-6"
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {countriesWithCurrencies.map((country: IcountriesWithCurrencies) => (
                      <button
                        key={country.urlPrefix}
                        onClick={() => {
                          setSelectedCountry(country)
                          closeModal()
                        }}
                        className={`items-left flex flex-col rounded-lg p-3 transition-colors hover:bg-gray-50 ${
                          selectedCountry.urlPrefix === country.urlPrefix ? 'ring-2 ring-blue-500' : ''
                        }`}
                      >
                        <div className="text-sm font-medium text-gray-700">{country.country}</div>
                        <div className="text-sm text-gray-500">
                          {country.currency} - {country.symbol}
                        </div>
                      </button>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
