import type { WordPronunciation } from './pronunciationTypes'

export const samplePronunciationData: WordPronunciation[] = [
  {
    word: 'cat',
    pronunciations: [
      {
        ipa: '/kæt/',
        phonemes: ['K', 'AE1', 'T'],
        vowels: [
          {
            arpabet: 'AE1',
            ipa: 'æ',
            stress: 1,
          },
        ],
        primaryVowel: 'æ',
      },
    ],
    meanings: {},
    source: 'cmudict',
  },

  {
    word: 'cup',
    pronunciations: [
      {
        ipa: '/kʌp/',
        phonemes: ['K', 'AH1', 'P'],
        vowels: [
          {
            arpabet: 'AH1',
            ipa: 'ʌ',
            stress: 1,
          },
        ],
        primaryVowel: 'ʌ',
      },
    ],
    meanings: {},
    source: 'cmudict',
  },

  {
    word: 'hot',
    pronunciations: [
      {
        ipa: '/hɑt/',
        phonemes: ['HH', 'AA1', 'T'],
        vowels: [
          {
            arpabet: 'AA1',
            ipa: 'ɑ',
            stress: 1,
          },
        ],
        primaryVowel: 'ɑ',
      },
    ],
    meanings: {},
    source: 'cmudict',
  },

  {
    word: 'apple',
    pronunciations: [
      {
        ipa: '/ˈæpəl/',
        phonemes: ['AE1', 'P', 'AH0', 'L'],
        vowels: [
          {
            arpabet: 'AE1',
            ipa: 'æ',
            stress: 1,
          },
          {
            arpabet: 'AH0',
            ipa: 'ə',
            stress: 0,
          },
        ],
        primaryVowel: 'æ',
      },
    ],
    meanings: {},
    source: 'cmudict',
  },

  {
    word: 'appointment',
    pronunciations: [
      {
        ipa: '/əpˈɔɪntmənt/',
        phonemes: ['AH0', 'P', 'OY1', 'N', 'T', 'M', 'AH0', 'N', 'T'],
        vowels: [
          {
            arpabet: 'AH0',
            ipa: 'ə',
            stress: 0,
          },
          {
            arpabet: 'OY1',
            ipa: 'ɔɪ',
            stress: 1,
          },
          {
            arpabet: 'AH0',
            ipa: 'ə',
            stress: 0,
          },
        ],
        primaryVowel: 'ɔɪ',
      },
    ],
    meanings: {},
    source: 'cmudict',
  },

  {
    word: 'tomorrow',
    pronunciations: [
      {
        ipa: '/təˈmɑroʊ/',
        phonemes: ['T', 'AH0', 'M', 'AA1', 'R', 'OW2'],
        vowels: [
          {
            arpabet: 'AH0',
            ipa: 'ə',
            stress: 0,
          },
          {
            arpabet: 'AA1',
            ipa: 'ɑ',
            stress: 1,
          },
          {
            arpabet: 'OW2',
            ipa: 'oʊ',
            stress: 2,
          },
        ],
        primaryVowel: 'ɑ',
      },
      {
        ipa: '/tuˈmɑroʊ/',
        phonemes: ['T', 'UW0', 'M', 'AA1', 'R', 'OW2'],
        vowels: [
          {
            arpabet: 'UW0',
            ipa: 'u',
            stress: 0,
          },
          {
            arpabet: 'AA1',
            ipa: 'ɑ',
            stress: 1,
          },
          {
            arpabet: 'OW2',
            ipa: 'oʊ',
            stress: 2,
          },
        ],
        primaryVowel: 'ɑ',
      },
    ],
    meanings: {},
    source: 'cmudict',
  },

  {
    word: 'Siobhan',
    pronunciations: [
      {
        ipa: '/ʃaʊbɑn/',
        phonemes: ['SH', 'AW1', 'B', 'AA2', 'N'],
        vowels: [
          {
            arpabet: 'AW1',
            ipa: 'aʊ',
            stress: 1,
          },
          {
            arpabet: 'AA2',
            ipa: 'ɑ',
            stress: 2,
          },
        ],
        primaryVowel: 'aʊ',
      },
      {
        ipa: '/ʃəvɔn/',
        phonemes: ['SH', 'AH0', 'V', 'AO1', 'N'],
        vowels: [
          {
            arpabet: 'AH0',
            ipa: 'ə',
            stress: 0,
          },
          {
            arpabet: 'AO1',
            ipa: 'ɔ',
            stress: 1,
          },
        ],
        primaryVowel: 'ɔ',
      },
    ],
    meanings: {},
    source: 'cmudict',
  },
]
