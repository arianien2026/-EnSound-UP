import {
  lookupCmudictWord,
} from './cmudictLookup'

const words = [
  'cat',
  'cup',
  'hot',
  'apple',
  'appointment',
  'tomorrow',
  'Siobhan',
]

for (const word of words) {
  console.log(
    '\nWORD:',
    word,
  )

  const result = lookupCmudictWord(word)

  console.log(
    JSON.stringify(
      result,
      null,
      2,
    ),
  )
}
