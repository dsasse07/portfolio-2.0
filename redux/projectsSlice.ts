import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PortfolioProjectsResponseModel } from '../data/networkRequests'

// Define a type for the slice state
interface projectsState {
  projects: PortfolioProjectsResponseModel[]
  skills: string[]
}

// Define the initial state using that type
const initialState: projectsState = {
  projects: [],
  skills: [],
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
      const skills = new Set<string>()
      action.payload.forEach((prj) => {
        const topics = prj.repositoryTopics.nodes.map((node) => node.topic.name)
        for (const topic of topics) {
          skills.add(topic)
        }
      })
      state.projects = action.payload
      state.skills = Array.from(skills)
    },
  },
})

export const { setProjects } = projectsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default projectsSlice.reducer
