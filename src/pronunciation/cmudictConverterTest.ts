import {
  createWordPronunciation,
} from './cmudictConverter'

const tests = [
  {
    word: 'cat',
    variants: [
      ['K', 'AE1', 'T'],
    ],
  },
  {
    word: 'cup',
    variants: [
      ['K', 'AH1', 'P'],
    ],
  },
  {
    word: 'hot',
    variants: [
      ['HH', 'AA1', 'T'],
    ],
  },
  {
    word: 'apple',
    variants: [
      ['AE1', 'P', 'AH0', 'L'],
    ],
  },
  {
    word: 'appointment',
    variants: [
      ['AH0', 'P', 'OY1', 'N', 'T', 'M', 'AH0', 'N', 'T'],
    ],
  },
  {
    word: 'tomorrow',
    variants: [
      ['T', 'AH0', 'M', 'AA1', 'R', 'OW2'],
      ['T', 'UW0', 'M', 'AA1', 'R', 'OW2'],
    ],
  },
  {
    word: 'Siobhan',
    variants: [
      ['SH', 'AW1', 'B', 'AA2', 'N'],
      ['SH', 'AH0', 'V', 'AO1', 'N'],
    ],
  },
]

for (const test of tests) {
  const result = createWordPronunciation(
    test.word,
    test.variants,
  )

  console.log(
    JSON.stringify(result, null, 2),
  )
}
