
const countryData = [
    {
        code: 'fo',
        name: 'Faroe Islands',
        capital: 'Tórshavn',
        currency: 'DKK',
    },
    {
        code: 'um',
        name: 'United States Minor Outlying Islands',
        capital: 'Washington, D.C.',
        currency: 'USD',
    },
    {
        code: 'us',
        name: 'United States',
        capital: 'Washington, D.C.',
        currency: 'USD',
    },
    {
        code: 'jp',
        name: 'Japan',
        capital: 'Tokyo',
        currency: 'JPY',
    },
    {
        code: 'sc',
        name: 'Seychelles',
        capital: 'Victoria',
        currency: 'SCR',
    },
    {
        code: 'nz',
        name: 'New Zealand',
        capital: 'Wellington',
        currency: 'NZD',
    },
    {
        code: 'in',
        name: 'India',
        capital: 'New Delhi',
        currency: 'INR',
    },
    {
        code: 'kr',
        name: 'South Korea',
        capital: 'Seoul',
        currency: 'KRW',
    },
    {
        code: 'fr',
        name: 'France',
        capital: 'Paris',
        currency: 'EUR',
    },
    {
        code: 'fm',
        name: 'Micronesia',
        capital: 'Palikir',
        currency: 'USD',
    },
    {
        code: 'cu',
        name: 'Cuba',
        capital: 'Havana',
        currency: 'CUP',
    },
    {
        code: 'cn',
        name: 'China',
        capital: 'Beijing',
        currency: 'CNY',
    },
    {
        code: 'pt',
        name: 'Portugal',
        capital: 'Lisbon',
        currency: 'EUR',
    },
    {
        code: 'sw',
        name: 'Sweden',
        capital: 'Stockholm',
        currency: 'SEK',
    },
    {
        code: 'sh',
        name: 'Saint Helena',
        capital: 'Jamestown',
        currency: 'SHP',
    },
    {
        code: 'br',
        name: 'Brazil',
        capital: 'Brasília',
        currency: 'BRL',
    },
    {
        code: 'ec',
        name: 'Ecuador',
        capital: 'Quito',
        currency: 'USD',
    },
    {
        code: 'au',
        name: 'Australia',
        capital: 'Canberra',
        currency: 'AUD',
    },
    {
        code: 'ki',
        name: 'Kiribati',
        capital: 'Tarawa',
        currency: 'AUD',
    },
    {
        code: 'ph',
        name: 'Philippines',
        capital: 'Manila',
        currency: 'PHP',
    },
    {
        code: 'mx',
        name: 'Mexico',
        capital: 'Mexico City',
        currency: 'MXN',
    },
    {
        code: 'es',
        name: 'Spain',
        capital: 'Madrid',
        currency: 'EUR',
    },
    {
        code: 'bu',
        name: 'Bulgaria',
        capital: 'Sofia',
        currency: 'BGN',
    },
    {
        code: 'mv',
        name: 'Maldives',
        capital: 'Malé',
        currency: 'MVR',
    },
    {
        code: 'gb',
        name: 'United Kingdom',
        capital: 'London',
        currency: 'GBP',
    },
    {
        code: 'gr',
        name: 'Greece',
        capital: 'Athens',
        currency: 'EUR',
    },
    {
        code: 'as',
        name: 'American Samoa',
        capital: 'Pago Pago',
        currency: 'USD',
    },
    {
        code: 'dk',
        name: 'Denmark',
        capital: 'Copenhagen',
        currency: 'DKK',
    },
    {
        code: 'gl',
        name: 'Greenland',
        capital: 'Nuuk',
        currency: 'DKK',
    },
    {
        code: 'gu',
        name: 'Guam',
        capital: 'Hagåtña',
        currency: 'USD',
    },
    {
        code: 'mp',
        name: 'Northern Mariana Islands',
        capital: 'Saipan',
        currency: 'USD',
    },
    {
        code: 'pr',
        name: 'Puerto Rico',
        capital: 'San Juan',
        currency: 'USD',
    },
    {
        code: 'vi',
        name: 'United States Virgin Islands',
        capital: 'Charlotte Amalie',
        currency: 'USD',
    },
    {
        code: 'ca',
        name: 'Canada',
        capital: 'Ottawa',
        currency: 'CAD',
    },
    {
        code: 'st',
        name: 'São Tomé and Príncipe',
        capital: 'São Tomé',
        currency: 'STN',
    },
    {
        code: 'tz',
        name: 'Tanzania',
        capital: 'Dodoma',
        currency: 'TZS',
    },
    {
        code: 'ar',
        name: 'Argentina',
        capital: 'Buenos Aires',
        currency: 'ARS',
    },
    {
        code: 'cv',
        name: 'Cape Verde',
        capital: 'Praia',
        currency: 'CVE',
    },
    {
        code: 'dm',
        name: 'Dominica',
        capital: 'Roseau',
        currency: 'XCD',
    },
    {
        code: 'nl',
        name: 'Netherlands',
        capital: 'Amsterdam',
        currency: 'EUR',
    },
    {
        code: 'ye',
        name: 'Yemen',
        capital: 'Sanaa',
        currency: 'YER',
    },
    {
        code: 'jm',
        name: 'Jamaica',
        capital: 'Kingston',
        currency: 'JMD',
    },
    {
        code: 'ws',
        name: 'Samoa',
        capital: 'Apia',
        currency: 'WST',
    },
    {
        code: 'om',
        name: 'Oman',
        capital: 'Muscat',
        currency: 'OMR',
    },
    {
        code: 'vc',
        name: 'Saint Vincent and the Grenadines',
        capital: 'Kingstown',
        currency: 'XCD',
    },
    {
        code: 'tr',
        name: 'Turkey',
        capital: 'Ankara',
        currency: 'TRY',
    },
    {
        code: 'bd',
        name: 'Bangladesh',
        capital: 'Dhaka',
        currency: 'BDT',
    },
    {
        code: 'sb',
        name: 'Solomon Islands',
        capital: 'Honiara',
        currency: 'AUD',
    },
    {
        code: 'lc',
        name: 'Saint Lucia',
        capital: 'Castries',
        currency: 'XCD',
    },
    {
        code: 'nr',
        name: 'Nauru',
        capital: 'Yaren District',
        currency: 'AUD',
    },
    {
        code: 'no',
        name: 'Norway',
        capital: 'Oslo',
        currency: 'NOK',
    },
    {
        code: 'kn',
        name: 'Saint Kitts and Nevis',
        capital: 'Basseterre',
        currency: 'XCD',
    },
    {
        code: 'bh',
        name: 'Bahrain',
        capital: 'Manama',
        currency: 'BHD',
    },
    {
        code: 'to',
        name: 'Tonga',
        capital: 'Nukuʻalofa',
        currency: 'TOP',
    },
    {
        code: 'fi',
        name: 'Finland',
        capital: 'Helsinki',
        currency: 'EUR',
    },
    {
        code: 'id',
        name: 'Indonesia',
        capital: 'Jakarta',
        currency: 'IDR',
    },
    {
        code: 'mu',
        name: 'Mauritius',
        capital: 'Port Louis',
        currency: 'MUR',
    },
    {
        code: 'se',
        name: 'Sweden',
        capital: 'Stockholm',
        currency: 'SEK',
    },
    {
        code: 'tt',
        name: 'Trinidad and Tobago',
        capital: 'Port of Spain',
        currency: 'TTD',
    },
    {
        code: 'my',
        name: 'Malaysia',
        capital: 'Kuala Lumpur',
        currency: 'MYR',
    },
    {
        code: 'bs',
        name: 'Bahamas',
        capital: 'Nassau',
        currency: 'BSD',
    },
    {
        code: 'pw',
        name: 'Palau',
        capital: 'Ngerulmud',
        currency: 'USD',
    },
    {
        code: 'ir',
        name: 'Iran',
        capital: 'Tehran',
        currency: 'IRR',
    },
    {
        code: 'tv',
        name: 'Tuvalu',
        capital: 'Funafuti',
        currency: 'AUD',
    },
    {
        code: 'mh',
        name: 'Marshall Islands',
        capital: 'Majuro',
        currency: 'USD',
    },
    {
        code: 'cl',
        name: 'Chile',
        capital: 'Santiago',
        currency: 'CLP',
    },
    {
        code: 'th',
        name: 'Thailand',
        capital: 'Bangkok',
        currency: 'THB',
    },
    {
        code: 'gd',
        name: 'Grenada',
        capital: 'St. George\'s',
        currency: 'XCD',
    },
    {
        code: 'ee',
        name: 'Estonia',
        capital: 'Tallinn',
        currency: 'EUR',
    },
    {
        code: 'ag',
        name: 'Antigua and Barbuda',
        capital: 'Saint John\'s',
        currency: 'XCD',
    },
    {
        code: 'tw',
        name: 'Taiwan',
        capital: 'Taipei',
        currency: 'TWD',
    },
    {
        code: 'bb',
        name: 'Barbados',
        capital: 'Bridgetown',
        currency: 'BBD',
    },
    {
        code: 'it',
        name: 'Italy',
        capital: 'Rome',
        currency: 'EUR',
    },
    {
        code: 'mt',
        name: 'Malta',
        capital: 'Valletta',
        currency: 'EUR',
    },
    {
        code: 'pg',
        name: 'Papua New Guinea',
        capital: 'Port Moresby',
        currency: 'PGK',
    },
    {
        code: 'de',
        name: 'Germany',
        capital: 'Berlin',
        currency: 'EUR',
    },
    {
        code: 'vu',
        name: 'Vanuatu',
        capital: 'Port Vila',
        currency: 'VUV',
    },
    {
        code: 'gq',
        name: 'Equatorial Guinea',
        capital: 'Malabo',
        currency: 'XAF',
    },
    {
        code: 'cy',
        name: 'Cyprus',
        capital: 'Nicosia',
        currency: 'EUR',
    },
    {
        code: 'km',
        name: 'Comoros',
        capital: 'Moroni',
        currency: 'KMF',
    },
    {
        code: 'fj',
        name: 'Fiji',
        capital: 'Suva',
        currency: 'FJD',
    },
    {
        code: 'ru',
        name: 'Russia',
        capital: 'Moscow',
        currency: 'RUB',
    },
    {
        code: 'ug',
        name: 'Uganda',
        capital: 'Kampala',
        currency: 'UGX',
    },
    {
        code: 'va',
        name: 'Vatican City',
        capital: 'Vatican City',
        currency: 'EUR',
    },
    {
        code: 'sm',
        name: 'San Marino',
        capital: 'San Marino',
        currency: 'EUR',
    },
    {
        code: 'kz',
        name: 'Kazakhstan',
        capital: 'Nur-Sultan',
        currency: 'KZT',
    },
    {
        code: 'az',
        name: 'Azerbaijan',
        capital: 'Baku',
        currency: 'AZN',
    },
    {
        code: 'am',
        name: 'Armenia',
        capital: 'Yerevan',
        currency: 'AMD',
    },
    {
        code: 'tj',
        name: 'Tajikistan',
        capital: 'Dushanbe',
        currency: 'TJS',
    },
    {
        code: 'ls',
        name: 'Lesotho',
        capital: 'Maseru',
        currency: 'LSL',
    },
    {
        code: 'uz',
        name: 'Uzbekistan',
        capital: 'Tashkent',
        currency: 'UZS',
    },
    {
        code: 'ma',
        name: 'Morocco',
        capital: 'Rabat',
        currency: 'MAD',
    },
    {
        code: 'co',
        name: 'Colombia',
        capital: 'Bogotá',
        currency: 'COP',
    },
    {
        code: 'tl',
        name: 'Timor-Leste',
        capital: 'Dili',
        currency: 'USD',
    },
    {
        code: 'kh',
        name: 'Cambodia',
        capital: 'Phnom Penh',
        currency: 'KHR',
    },
    {
        code: 'sa',
        name: 'Saudi Arabia',
        capital: 'Riyadh',
        currency: 'SAR',
    },
    {
        code: 'pk',
        name: 'Pakistan',
        capital: 'Islamabad',
        currency: 'PKR',
    },
    {
        code: 'ae',
        name: 'United Arab Emirates',
        capital: 'Abu Dhabi',
        currency: 'AED',
    },
    {
        code: 'ke',
        name: 'Kenya',
        capital: 'Nairobi',
        currency: 'KES',
    },
    {
        code: 'pe',
        name: 'Peru',
        capital: 'Lima',
        currency: 'PEN',
    },
    {
        code: 'do',
        name: 'Dominican Republic',
        capital: 'Santo Domingo',
        currency: 'DOP',
    },
    {
        code: 'ht',
        name: 'Haiti',
        capital: 'Port-au-Prince',
        currency: 'HTG',
    },
    {
        code: 'ao',
        name: 'Angola',
        capital: 'Luanda',
        currency: 'AOA',
    },
    {
        code: 'mz',
        name: 'Mozambique',
        capital: 'Maputo',
        currency: 'MZN',
    },
    {
        code: 'pa',
        name: 'Panama',
        capital: 'Panama City',
        currency: 'PAB',
    },
    {
        code: 'cr',
        name: 'Costa Rica',
        capital: 'San José',
        currency: 'CRC',
    },
    {
        code: 'sv',
        name: 'El Salvador',
        capital: 'San Salvador',
        currency: 'USD',
    },
    {
        code: 'bo',
        name: 'Bolivia',
        capital: 'Sucre',
        currency: 'BOB',
    },
    {
        code: 'hr',
        name: 'Croatia',
        capital: 'Zagreb',
        currency: 'HRK',
    },
    {
        code: 'bz',
        name: 'Belize',
        capital: 'Belmopan',
        currency: 'BZD',
    },
    {
        code: 'za',
        name: 'South Africa',
        capital: 'Pretoria',
        currency: 'ZAR',
    },
    {
        code: 'ly',
        name: 'Libya',
        capital: 'Tripoli',
        currency: 'LYD',
    },
    {
        code: 'sd',
        name: 'Sudan',
        capital: 'Khartoum',
        currency: 'SDG',
    },
    {
        code: 'cd',
        name: 'Democratic Republic of the Congo',
        capital: 'Kinshasa',
        currency: 'CDF',
    },
    {
        code: 'kw',
        name: 'Kuwait',
        capital: 'Kuwait City',
        currency: 'KWD',
    },
    {
        code: 'er',
        name: 'Eritrea',
        capital: 'Asmara',
        currency: 'ERN',
    },
    {
        code: 'ie',
        name: 'Ireland',
        capital: 'Dublin',
        currency: 'EUR',
    },
    {
        code: 'kp',
        name: 'North Korea',
        capital: 'Pyongyang',
        currency: 'KPW',
    },
    {
        code: 've',
        name: 'Venezuela',
        capital: 'Caracas',
        currency: 'VES',
    },
    {
        code: 'gy',
        name: 'Guyana',
        capital: 'Georgetown',
        currency: 'GYD',
    },
    {
        code: 'hn',
        name: 'Honduras',
        capital: 'Tegucigalpa',
        currency: 'HNL',
    },
    {
        code: 'mm',
        name: 'Myanmar',
        capital: 'Naypyidaw',
        currency: 'MMK',
    },
    {
        code: 'ga',
        name: 'Gabon',
        capital: 'Libreville',
        currency: 'XAF',
    },
    {
        code: 'ni',
        name: 'Nicaragua',
        capital: 'Managua',
        currency: 'NIO',
    },
    {
        code: 'mw',
        name: 'Malawi',
        capital: 'Lilongwe',
        currency: 'MWK',
    },
    {
        code: 'sx',
        name: 'Sint Maarten',
        capital: 'Philipsburg',
        currency: 'ANG',
    },
    {
        code: 'tm',
        name: 'Turkmenistan',
        capital: 'Ashgabat',
        currency: 'TMT',
    },
    {
        code: 'zm',
        name: 'Zambia',
        capital: 'Lusaka',
        currency: 'ZMW',
    },
    {
        code: 'nc',
        name: 'New Caledonia',
        capital: 'Nouméa',
        currency: 'XPF',
    },
    {
        code: 'mr',
        name: 'Mauritania',
        capital: 'Nouakchott',
        currency: 'MRU',
    },
    {
        code: 'dz',
        name: 'Algeria',
        capital: 'Algiers',
        currency: 'DZD',
    },
    {
        code: 'lt',
        name: 'Lithuania',
        capital: 'Vilnius',
        currency: 'EUR',
    },
    {
        code: 'et',
        name: 'Ethiopia',
        capital: 'Addis Ababa',
        currency: 'ETB',
    },
    {
        code: 'so',
        name: 'Somalia',
        capital: 'Mogadishu',
        currency: 'SOS',
    },
    {
        code: 'gh',
        name: 'Ghana',
        capital: 'Accra',
        currency: 'GHS',
    },
    {
        code: 'si',
        name: 'Slovenia',
        capital: 'Ljubljana',
        currency: 'EUR',
    },
    {
        code: 'gt',
        name: 'Guatemala',
        capital: 'Guatemala City',
        currency: 'GTQ',
    },
    {
        code: 'ba',
        name: 'Bosnia and Herzegovina',
        capital: 'Sarajevo',
        currency: 'BAM',
    },
    {
        code: 'jo',
        name: 'Jordan',
        capital: 'Amman',
        currency: 'JOD',
    },
    {
        code: 'mc',
        name: 'Monaco',
        capital: 'Monaco',
        currency: 'EUR',
    },
    {
        code: 'al',
        name: 'Albania',
        capital: 'Tirana',
        currency: 'ALL',
    },
    {
        code: 'uy',
        name: 'Uruguay',
        capital: 'Montevideo',
        currency: 'UYU',
    },
    {
        code: 'cnm',
        name: 'Northern Mariana Islands',
        capital: 'Saipan',
        currency: 'USD',
    },
    {
        code: 'mn',
        name: 'Mongolia',
        capital: 'Ulaanbaatar',
        currency: 'MNT',
    },
    {
        code: 'rw',
        name: 'Rwanda',
        capital: 'Kigali',
        currency: 'RWF',
    },
    {
        code: 'cm',
        name: 'Cameroon',
        capital: 'Yaoundé',
        currency: 'XAF',
    },
    {
        code: 'cg',
        name: 'Republic of the Congo',
        capital: 'Brazzaville',
        currency: 'XAF',
    },
    {
        code: 'eh',
        name: 'Western Sahara',
        capital: 'Laayoune',
        currency: 'MAD',
    },
    {
        code: 'rs',
        name: 'Serbia',
        capital: 'Belgrade',
        currency: 'RSD',
    },
    {
        code: 'me',
        name: 'Montenegro',
        capital: 'Podgorica',
        currency: 'EUR',
    },
    {
        code: 'bj',
        name: 'Benin',
        capital: 'Porto-Novo',
        currency: 'XOF',
    },
    {
        code: 'ng',
        name: 'Nigeria',
        capital: 'Abuja',
        currency: 'NGN',
    },
    {
        code: 'tg',
        name: 'Togo',
        capital: 'Lomé',
        currency: 'XOF',
    },
    {
        code: 'af',
        name: 'Afghanistan',
        capital: 'Kabul',
        currency: 'AFN',
    },
    {
        code: 'ua',
        name: 'Ukraine',
        capital: 'Kyiv',
        currency: 'UAH',
    },
    {
        code: 'sk',
        name: 'Slovakia',
        capital: 'Bratislava',
        currency: 'EUR',
    },
    {
        code: 'bg',
        name: 'Bulgaria',
        capital: 'Sofia',
        currency: 'BGN',
    },
    {
        code: 'qa',
        name: 'Qatar',
        capital: 'Doha',
        currency: 'QAR',
    },
    {
        code: 'li',
        name: 'Liechtenstein',
        capital: 'Vaduz',
        currency: 'CHF',
    },
    {
        code: 'at',
        name: 'Austria',
        capital: 'Vienna',
        currency: 'EUR',
    },
    {
        code: 'sz',
        name: 'Swaziland',
        capital: 'Mbabane',
        currency: 'SZL',
    },
    {
        code: 'hu',
        name: 'Hungary',
        capital: 'Budapest',
        currency: 'HUF',
    },
    {
        code: 'ro',
        name: 'Romania',
        capital: 'Bucharest',
        currency: 'RON',
    },
    {
        code: 'lu',
        name: 'Luxembourg',
        capital: 'Luxembourg City',
        currency: 'EUR',
    },
    {
        code: 'ci',
        name: 'Côte d\'Ivoire',
        capital: 'Yamoussoukro',
        currency: 'XOF',
    },
    {
        code: 'lr',
        name: 'Liberia',
        capital: 'Monrovia',
        currency: 'LRD',
    },
    {
        code: 'bn',
        name: 'Brunei',
        capital: 'Bandar Seri Begawan',
        currency: 'BND',
    },
    {
        code: 'be',
        name: 'Belgium',
        capital: 'Brussels',
        currency: 'EUR',
    },
    {
        code: 'iq',
        name: 'Iraq',
        capital: 'Baghdad',
        currency: 'IQD',
    },
    {
        code: 'ge',
        name: 'Georgia',
        capital: 'Tbilisi',
        currency: 'GEL',
    },
    {
        code: 'gm',
        name: 'The Gambia',
        capital: 'Banjul',
        currency: 'GMD',
    },
    {
        code: 'ch',
        name: 'Switzerland',
        capital: 'Bern',
        currency: 'CHF',
    },
    {
        code: 'td',
        name: 'Chad',
        capital: 'N\'Djamena',
        currency: 'XAF',
    },
    {
        code: 'kv',
        name: 'Kosovo',
        capital: 'Pristina',
        currency: 'EUR',
    },
    {
        code: 'lb',
        name: 'Lebanon',
        capital: 'Beirut',
        currency: 'LBP',
    },
    {
        code: 'dj',
        name: 'Djibouti',
        capital: 'Djibouti',
        currency: 'DJF',
    },
    {
        code: 'bi',
        name: 'Burundi',
        capital: 'Gitega',
        currency: 'BIF',
    },
    {
        code: 'sr',
        name: 'Suriname',
        capital: 'Paramaribo',
        currency: 'SRD',
    },
    {
        code: 'il',
        name: 'Israel',
        capital: 'Jerusalem',
        currency: 'ILS',
    },
    {
        code: 'ml',
        name: 'Mali',
        capital: 'Bamako',
        currency: 'XOF',
    },
    {
        code: 'sn',
        name: 'Senegal',
        capital: 'Dakar',
        currency: 'XOF',
    },
    {
        code: 'gw',
        name: 'Guinea-Bissau',
        capital: 'Bissau',
        currency: 'XOF',
    },
    {
        code: 'gn',
        name: 'Guinea',
        capital: 'Conakry',
        currency: 'GNF',
    },
    {
        code: 'zw',
        name: 'Zimbabwe',
        capital: 'Harare',
        currency: 'ZWL',
    },
    {
        code: 'pl',
        name: 'Poland',
        capital: 'Warsaw',
        currency: 'PLN',
    },
    {
        code: 'mk',
        name: 'North Macedonia',
        capital: 'Skopje',
        currency: 'MKD',
    },
    {
        code: 'py',
        name: 'Paraguay',
        capital: 'Asunción',
        currency: 'PYG',
    },
    {
        code: 'by',
        name: 'Belarus',
        capital: 'Minsk',
        currency: 'BYN',
    },
    {
        code: 'lv',
        name: 'Latvia',
        capital: 'Riga',
        currency: 'EUR',
    },
    {
        code: 'sy',
        name: 'Syria',
        capital: 'Damascus',
        currency: 'SYP',
    },
    {
        code: 'bf',
        name: 'Burkina Faso',
        capital: 'Ouagadougou',
        currency: 'XOF',
    },
    {
        code: 'ne',
        name: 'Niger',
        capital: 'Niamey',
        currency: 'XOF',
    },
    {
        code: 'na',
        name: 'Namibia',
        capital: 'Windhoek',
        currency: 'NAD',
    },
    {
        code: 'tn',
        name: 'Tunisia',
        capital: 'Tunis',
        currency: 'TND',
    },
    {
        code: 'kg',
        name: 'Kyrgyzstan',
        capital: 'Bishkek',
        currency: 'KGS',
    },
    {
        code: 'md',
        name: 'Moldova',
        capital: 'Chișinău',
        currency: 'MDL',
    },
    {
        code: 'ss',
        name: 'South Sudan',
        capital: 'Juba',
        currency: 'SSP',
    },
    {
        code: 'cf',
        name: 'Central African Republic',
        capital: 'Bangui',
        currency: 'XAF',
    },
    {
        code: 'bw',
        name: 'Botswana',
        capital: 'Gaborone',
        currency: 'BWP',
    },
    {
        code: 'sg',
        name: 'Singapore',
        capital: 'Singapore',
        currency: 'SGD',
    },
    {
        code: 'vn',
        name: 'Vietnam',
        capital: 'Hanoi',
        currency: 'VND',
    },
    {
        code: 'sl',
        name: 'Sierra Leone',
        capital: 'Freetown',
        currency: 'SLL',
    },
    {
        code: 'mg',
        name: 'Madagascar',
        capital: 'Antananarivo',
        currency: 'MGA',
    },
    {
        code: 'is',
        name: 'Iceland',
        capital: 'Reykjavík',
        currency: 'ISK',
    },
    {
        code: 'szl',
        name: 'Eswatini',
        capital: 'Mbabane',
        currency: 'SZL',
    },
    {
        code: 'szw',
        name: 'Sweden',
        capital: 'Stockholm',
        currency: 'SEK',
    },
    {
        code: 'ltz',
        name: 'Luxembourg',
        capital: 'Luxembourg City',
        currency: 'EUR',
    },
    {
        code: 'hk',
        name: 'Hong Kong',
        capital: 'Hong Kong',
        currency: 'HKD',
    },
    {
        code: 'bnc',
        name: 'Bonaire, Sint Eustatius and Saba',
        capital: 'Kralendijk',
        currency: 'USD',
    },
    {
        code: 'gu',
        name: 'Guam',
        capital: 'Hagåtña',
        currency: 'USD',
    },
    {
        code: 'mp',
        name: 'Northern Mariana Islands',
        capital: 'Saipan',
        currency: 'USD',
    },
    {
        code: 'pr',
        name: 'Puerto Rico',
        capital: 'San Juan',
        currency: 'USD',
    },
    {
        code: 'ck',
        name: 'Cook Islands',
        capital: 'Avarua',
        currency: 'NZD',
    },
    {
        code: 'cc',
        name: 'Cocos (Keeling) Islands',
        capital: 'West Island',
        currency: 'AUD',
    },
    {
        code: 'fm',
        name: 'Micronesia',
        capital: 'Palikir',
        currency: 'USD',
    },
    {
        code: 'mh',
        name: 'Marshall Islands',
        capital: 'Majuro',
        currency: 'USD',
    },
    {
        code: 'ws',
        name: 'Samoa',
        capital: 'Apia',
        currency: 'WST',
    },
    {
        code: 'to',
        name: 'Tonga',
        capital: 'Nukuʻalofa',
        currency: 'TOP',
    },
    {
        code: 'nr',
        name: 'Nauru',
        capital: 'Yaren',
        currency: 'AUD',
    },
    {
        code: 'tv',
        name: 'Tuvalu',
        capital: 'Funafuti',
        currency: 'AUD',
    },
    {
        code: 'mhg',
        name: 'Marshall Islands',
        capital: 'Majuro',
        currency: 'USD',
    },
    {
        code: 'wsr',
        name: 'Samoa',
        capital: 'Apia',
        currency: 'WST',
    },
    {
        code: 'fmz',
        name: 'Micronesia',
        capital: 'Palikir',
        currency: 'USD',
    },
    {
        code: 'khm',
        name: 'Cambodia',
        capital: 'Phnom Penh',
        currency: 'KHR',
    },
    {
        code: 'kh',
        name: 'Cambodia',
        capital: 'Phnom Penh',
        currency: 'KHR',
    },
    {
        code: 'nv',
        name: 'Niue',
        capital: 'Alofi',
        currency: 'NZD',
    },
    {
        code: 'sh',
        name: 'Saint Helena',
        capital: 'Jamestown',
        currency: 'SHP',
    },
    {
        code: 'mf',
        name: 'Saint Martin',
        capital: 'Marigot',
        currency: 'EUR',
    },
    {
        code: 'sx',
        name: 'Sint Maarten',
        capital: 'Philipsburg',
        currency: 'ANG',
    },
    {
        code: 'ck',
        name: 'Cook Islands',
        capital: 'Avarua',
        currency: 'NZD',
    },
    {
        code: 'gu',
        name: 'Guam',
        capital: 'Hagåtña',
        currency: 'USD',
    },
    {
        code: 'pm',
        name: 'Saint Pierre and Miquelon',
        capital: 'Saint-Pierre',
        currency: 'EUR',
    },
    {
        code: 'fm',
        name: 'Micronesia',
        capital: 'Palikir',
        currency: 'USD',
    },
    {
        code: 'vn',
        name: 'Vietnam',
        capital: 'Hanoi',
        currency: 'VND',
    },
    {
        code: 'fj',
        name: 'Fiji',
        capital: 'Suva',
        currency: 'FJD',
    },
    {
        code: 'ws',
        name: 'Samoa',
        capital: 'Apia',
        currency: 'WST',
    },
    {
        code: 'sg',
        name: 'Singapore',
        capital: 'Singapore',
        currency: 'SGD',
    },
    {
        code: 'pg',
        name: 'Papua New Guinea',
        capital: 'Port Moresby',
        currency: 'PGK',
    },
    {
        code: 'sb',
        name: 'Solomon Islands',
        capital: 'Honiara',
        currency: 'AUD',
    },
    {
        code: 'tv',
        name: 'Tuvalu',
        capital: 'Funafuti',
        currency: 'AUD',
    },
    {
        code: 'nu',
        name: 'Niue',
        capital: 'Alofi',
        currency: 'NZD',
    },
    {
        code: 'pw',
        name: 'Palau',
        capital: 'Ngerulmud',
        currency: 'USD',
    },
    {
        code: 'ai',
        name: 'Anguilla',
        capital: 'The Valley',
        currency: 'XCD',
    },
    {
        code: 'pr',
        name: 'Puerto Rico',
        capital: 'San Juan',
        currency: 'USD',
    },
    {
        code: 'pm', 
        name: 'Saint Pierre and Miquelon',
        capital: 'Saint-Pierre',
        currency: 'EUR',
    },
    {
        code: 'bnc',
        name: 'Bonaire, Sint Eustatius and Saba',
        capital: 'Kralendijk',
        currency: 'USD',
    },
    {
        code: 'la',
        name: 'Laos',
        capital: 'Vientiane',
        currency: 'LAK',
    },
    {
        code: 'eg',
        name: 'Egypt',
        capital: 'Cairo',
        currency: 'EGP',
    },
    {
        code: 'bt',
        name: 'Bhutan',
        capital: 'Thimphu',
        currency: 'BTN',
    },
    {
        code: 'np',
        name: 'Nepal',
        capital: 'Kathmandu',
        currency: 'NPR',
    },
    {
        code: 'cz',
        name: 'Czech Republic',
        capital: 'Prague',
        currency: 'CZK',
    },
];
    
export default countryData;