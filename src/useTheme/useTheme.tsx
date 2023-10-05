import { useTheme as useEmotionTheme } from '@emotion/react'

import { themeColor } from './colors'

export const defaultTheme = {
  color: themeColor
}

export type Theme = typeof defaultTheme

const useTheme = (): Theme => {
  const emotionTheme = useEmotionTheme()

  return {
    ...defaultTheme,
    ...emotionTheme,
  }
}

export default useTheme
