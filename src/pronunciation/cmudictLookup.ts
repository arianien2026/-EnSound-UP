import {
  createWordPronunciation,
} from './cmudictConverter'

import type {
  WordPronunciation,
} from './pronunciationTypes'

let pronunciationIndex:
  Map<string, string[][]> | null = null

let loadingPromise:
  Promise<Map<string, string[][]>> | null = null

function buildPronunciationIndex(
  cmudictText: string,
): Map<string, string[][]> {
  const index = new Map<string, string[][]>()

  for (const rawLine of cmudictText.split(/\r?\n/)) {
    const line = rawLine.trim()

    if (!line || line.startsWith(';;;')) {
      continue
    }

    const parts = line.split(/\s+/)
    const rawEntry = parts.shift()

    if (!rawEntry) {
      continue
    }

    const word = rawEntry
      .toLowerCase()
      .replace(/\(\d+\)$/, '')

    const existing = index.get(word)

    if (existing) {
      existing.push(parts)
    } else {
      index.set(word, [parts])
    }
  }

  return index
}

async function getPronunciationIndex():
  Promise<Map<string, string[][]>> {
  if (pronunciationIndex) {
    return pronunciationIndex
  }

  if (loadingPromise) {
    return loadingPromise
  }

  loadingPromise = fetch('/data/cmudict.dict')
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to load CMUdict: ${response.status}`,
        )
      }

      return response.text()
    })
    .then((text) => {
      pronunciationIndex =
        buildPronunciationIndex(text)

      return pronunciationIndex
    })
    .finally(() => {
      loadingPromise = null
    })

  return loadingPromise
}

export async function lookupCmudictWord(
  input: string,
): Promise<WordPronunciation | null> {
  const normalized = input
    .trim()
    .toLowerCase()

  if (!normalized) {
    return null
  }

  const index = await getPronunciationIndex()
  const variants = index.get(normalized)

  if (!variants || variants.length === 0) {
    return null
  }

  return createWordPronunciation(
    input,
    variants,
  )
}
