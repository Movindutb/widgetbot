import styled, { ThemedReactEmotionInterface } from 'react-emotion'

type Theme = {
  compact: boolean
  light: boolean
}

export default styled as ThemedReactEmotionInterface<Theme>

export * from 'react-emotion'