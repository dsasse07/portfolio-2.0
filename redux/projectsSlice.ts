import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PortfolioProjectsResponseModel } from '../data/networkRequests'

// Define a type for the slice state
interface projectsState {
  projects: PortfolioProjectsResponseModel[]
  skills: string[]
  filters: {
    [key: string]: boolean
  }
}

// Define the initial state using that type
const initialState: projectsState = {
  projects: [],
  skills: [],
  filters: {},
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
    toggleSkillFilter: (state, action: PayloadAction<string>) => {
      if (state.filters[action.payload]) {
        delete state.filters[action.payload]
      } else {
        state.filters[action.payload] = true
      }
    },

    clearSkillFilters: (state, _: PayloadAction<boolean>) => {
      for (const key in state.filters) {
        delete state.filters[key]
      }
    },
  },
})

export const { setProjects, toggleSkillFilter, clearSkillFilters } =
  projectsSlice.actions

export default projectsSlice.reducer
