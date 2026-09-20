export type MeaningLanguage =
  | 'zh-TW'
  | 'ja'
  | 'ko'
  | 'hi'
  | 'en'

export type PronunciationSource =
  | 'cmudict'
  | 'wiktionary'

export type StressLevel = 0 | 1 | 2

export type VowelPhoneme = {
  arpabet: string
  ipa: string
  stress: StressLevel
}

export type PronunciationEntry = {
  ipa: string
  phonemes: string[]
  vowels: VowelPhoneme[]
  primaryVowel: string | null
}

export type WordPronunciation = {
  word: string
  pronunciations: PronunciationEntry[]
  meanings: Partial<Record<MeaningLanguage, string>>
  source: PronunciationSource
}
