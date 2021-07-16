import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { DefaultTheme } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/themes'
// Define a type for the slice state
interface themeState {
  isDark: boolean
}

// Define the initial state using that type
const initialState: themeState = {
  isDark: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggle: (state) => {
      state.isDark = state.isDark ? false : true
    },
  },
})

export const { toggle } = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default themeSlice.reducer
