import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DefaultTheme } from 'styled-components'
import { theme } from '../styles/themes'
// Define a type for the slice state
interface themeState {
  // isDark: boolean
  showMobileMenu: boolean
  theme: DefaultTheme
}

// Define the initial state using that type
const initialState: themeState = {
  // isDark: false,
  showMobileMenu: false,
  theme: theme,
}

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    adjustHeaderOpacity: (state, action: PayloadAction<string>) => {
      state.theme.headerOpacity = action.payload
    },
    showMobileMenu: (state, action: PayloadAction<boolean>) => {
      state.showMobileMenu = action.payload
    },
  },
})

export const { adjustHeaderOpacity, showMobileMenu } = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default themeSlice.reducer
