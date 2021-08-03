import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import projectsReducer from './projectsSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
