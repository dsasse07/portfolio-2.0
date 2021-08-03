import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PortfolioProjectsResponseModel } from '../data/networkRequests'

// Define a type for the slice state
interface projectsState {
  projects: PortfolioProjectsResponseModel[]
}

// Define the initial state using that type
const initialState: projectsState = {
  projects: [],
}

export const projectsSlice = createSlice({
  name: 'projects',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProjects: (
      state,
      action: PayloadAction<PortfolioProjectsResponseModel[]>
    ) => {
      state.projects = action.payload
    },
  },
})

export const { setProjects } = projectsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default projectsSlice.reducer
