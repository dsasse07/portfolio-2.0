import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DefaultTheme } from 'styled-components'
import { lightTheme } from '../styles/themes'
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
  theme: lightTheme,
}

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // setIsDark: (state, action: PayloadAction<boolean>) => {
    //   if (action.payload) {
    //     state.isDark = true
    //     let currentOpacity = state.theme.headerOpacity
    //     state.theme = { ...darkTheme, headerOpacity: currentOpacity }
    //   } else {
    //     state.isDark = false
    //     let currentOpacity = state.theme.headerOpacity
    //     state.theme = { ...lightTheme, headerOpacity: currentOpacity }
    //   }
    // },
    // toggleTheme: (state) => {
    //   if (state.isDark) {
    //     state.isDark = false
    //     let currentOpacity = state.theme.headerOpacity
    //     state.theme = { ...lightTheme, headerOpacity: currentOpacity }
    //   } else {
    //     state.isDark = true
    //     let currentOpacity = state.theme.headerOpacity
    //     state.theme = { ...darkTheme, headerOpacity: currentOpacity }
    //   }
    // },
    adjustHeaderOpacity: (state, action: PayloadAction<string>) => {
      state.theme.headerOpacity = action.payload
    },
    showMobileMenu: (state, action: PayloadAction<boolean>) => {
      state.showMobileMenu = action.payload
      state.theme.scrollY = action.payload ? 'hidden' : 'auto'
    },
  },
})

export const {
  // toggleTheme, setIsDark,
  adjustHeaderOpacity,
  showMobileMenu,
} = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default themeSlice.reducer
