import { createContext } from 'react'

export interface ThemeType {
  buttonType: string
}

const ThemeContextDefaultValue = {
  buttonType: 'default'
}

export const ThemeContext = createContext(ThemeContextDefaultValue)