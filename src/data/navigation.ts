export interface IcountriesWithCurrencies {
  country: string
  currency: string
  symbol: string
  language: string
  countryCode: string
  urlPrefix: string
}
export const countriesWithCurrencies: IcountriesWithCurrencies[] = [
  { country: 'United States', currency: 'USD', symbol: '$', language: 'en', countryCode: 'us', urlPrefix: 'en-us' },
  { country: 'Argentina', currency: 'ARS', symbol: '$', language: 'Es', countryCode: 'ar', urlPrefix: 'es' }, // Catalan → English
  { country: 'Andorra', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'ad', urlPrefix: 'en-ad' }, // Catalan → English
  { country: 'Austria', currency: 'EUR', symbol: '€', language: 'de', countryCode: 'at', urlPrefix: 'de-at' },
  { country: 'Australia', currency: 'AUD', symbol: '$', language: 'en', countryCode: 'au', urlPrefix: 'en-au' },
  { country: 'Belgium', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'be', urlPrefix: 'en-be' }, // Dutch/French → English
  { country: 'Canada', currency: 'CAD', symbol: '$', language: 'en', countryCode: 'ca', urlPrefix: 'en-ca' }, // French Canada kept as English
  { country: 'China', currency: 'CNY', symbol: '¥', language: 'en', countryCode: 'cn', urlPrefix: 'en-cn' }, // Chinese → English
  { country: 'Cyprus', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'cy', urlPrefix: 'en-cy' }, // Greek → English
  { country: 'Germany', currency: 'EUR', symbol: '€', language: 'de', countryCode: 'de', urlPrefix: 'de-de' },
  { country: 'Estonia', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'ee', urlPrefix: 'en-ee' }, // Estonian → English
  { country: 'Spain', currency: 'EUR', symbol: '€', language: 'es', countryCode: 'es', urlPrefix: 'es-es' },
  { country: 'Finland', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'fi', urlPrefix: 'en-fi' }, // Finnish → English
  { country: 'France', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'fr', urlPrefix: 'en-fr' }, // French → English
  { country: 'United Kingdom', currency: 'GBP', symbol: '£', language: 'en', countryCode: 'gb', urlPrefix: 'en-gb' },
  { country: 'Greece', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'gr', urlPrefix: 'en-gr' }, // Greek → English
  { country: 'Indonesia', currency: 'IDR', symbol: 'Rp', language: 'en', countryCode: 'id', urlPrefix: 'en-id' }, // Indonesian → English
  { country: 'Ireland', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'ie', urlPrefix: 'en-ie' },
  { country: 'India', currency: 'INR', symbol: '₹', language: 'en', countryCode: 'in', urlPrefix: 'en-in' }, // Hindi → English
  { country: 'Italy', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'it', urlPrefix: 'en-it' }, // Italian → English
  { country: 'Japan', currency: 'JPY', symbol: '¥', language: 'en', countryCode: 'jp', urlPrefix: 'en-jp' }, // Japanese → English
  { country: 'South Korea', currency: 'KRW', symbol: '₩', language: 'en', countryCode: 'kr', urlPrefix: 'en-kr' }, // Korean → English
  { country: 'Lithuania', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'lt', urlPrefix: 'en-lt' }, // Lithuanian → English
  { country: 'Luxembourg', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'lu', urlPrefix: 'en-lu' }, // Luxembourgish → English
  { country: 'Latvia', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'lv', urlPrefix: 'en-lv' }, // Latvian → English
  { country: 'Monaco', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'mc', urlPrefix: 'en-mc' }, // French → English
  { country: 'Montenegro', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'me', urlPrefix: 'en-me' }, // Serbian → English
  { country: 'Malta', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'mt', urlPrefix: 'en-mt' }, // Maltese → English
  { country: 'Netherlands', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'nl', urlPrefix: 'en-nl' }, // Dutch → English
  { country: 'New Zealand', currency: 'NZD', symbol: '$', language: 'en', countryCode: 'nz', urlPrefix: 'en-nz' },
  { country: 'Portugal', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'pt', urlPrefix: 'en-pt' }, // Portuguese → English
  { country: 'Singapore', currency: 'SGD', symbol: '$', language: 'en', countryCode: 'sg', urlPrefix: 'en-sg' },
  { country: 'Slovenia', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'si', urlPrefix: 'en-si' }, // Slovenian → English
  { country: 'Slovakia', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'sk', urlPrefix: 'en-sk' }, // Slovak → English
  { country: 'San Marino', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'sm', urlPrefix: 'en-sm' }, // Italian → English
  { country: 'Thailand', currency: 'THB', symbol: '฿', language: 'en', countryCode: 'th', urlPrefix: 'en-th' }, // Thai → English
  { country: 'Vatican City', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'va', urlPrefix: 'en-va' }, // Italian → English
  { country: 'Vietnam', currency: 'VND', symbol: '₫', language: 'en', countryCode: 'vn', urlPrefix: 'en-vn' }, // Vietnamese → English
  { country: 'Kosovo', currency: 'EUR', symbol: '€', language: 'en', countryCode: 'xk', urlPrefix: 'en-xk' }, // Albanian/Serbian → English
]
