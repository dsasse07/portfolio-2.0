import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { DefaultTheme } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/themes'
// Define a type for the slice state
interface themeState {
  isDark: boolean
  theme: DefaultTheme
}

// Define the initial state using that type
const initialState: themeState = {
  isDark: false,
  theme: lightTheme,
}

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsDark: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.isDark = true
        state.theme = darkTheme
      } else {
        state.isDark = false
        state.theme = lightTheme
      }
    },
    toggleTheme: (state) => {
      if (state.isDark) {
        state.isDark = false
        state.theme = lightTheme
      } else {
        state.isDark = true
        state.theme = darkTheme
      }
    },
  },
})

export const { toggleTheme, setIsDark } = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default themeSlice.reducer
