import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from 'react'

export interface MediaQueries {
  [key: string]: string
}

export interface BreakpointProps {
  children: ReactNode
  queries: MediaQueries
}

export interface BreakpointResults {
  [key: string]: boolean
}

// Media Queries we are going to create listeners for
export const queries = {
  xs: '(max-width: 375px)',
  sm: '(max-width: 720px)',
  md: '(max-width: 1024px)',
  lg: '(max-width: 1200px)',
  dark: '(prefers-color-scheme: dark)',
}

const defaultValue: BreakpointResults = {}
const BreakpointContext = createContext<BreakpointResults>(defaultValue)

const BreakpointProvider: React.FC<BreakpointProps> = ({
  children,
  queries,
}) => {
  const [queryMatch, setQueryMatch] = useState<BreakpointResults>({})

  // When mounted, create a new map for media query states, and add listeners for any change
  // When unmounted, remove any listeners that that been created
  useEffect(() => {
    const mediaQueryLists: { [key: string]: MediaQueryList } = {}
    const keys: string[] = Object.keys(queries)
    let isAttached: boolean = false

    // Listener callback that will be attached to update the query states on change
    const handleQueryListener = () => {
      const updatedMatches = keys.reduce<BreakpointResults>((acc, media) => {
        acc[media] = !!(
          mediaQueryLists[media] && mediaQueryLists[media]?.matches
        )
        return acc
      }, {})
      setQueryMatch(updatedMatches)
    }

    if (window && window.matchMedia) {
      isAttached = true
      const matches: BreakpointResults = {}
      // for each query key, call .matchMedia and store the result of the media query
      // Attach a listener for each query
      keys.forEach((media) => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(queries[media])
          mediaQueryLists[media].addListener(handleQueryListener)
          matches[media] = mediaQueryLists[media].matches
        } else {
          matches[media] = false
        }
      })
      setQueryMatch(matches)
    }

    // When unmounted, remove any query listeners that were attached
    return () => {
      if (isAttached) {
        keys.forEach((media) => {
          if (typeof queries[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener)
          }
        })
      }
    }
  }, [queries])

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  )
}

const useBreakpoint = () => {
  const context = useContext(BreakpointContext)
  if (context === defaultValue) {
    throw new Error('useBreakpoint must be used within BreakpointProvider')
  }
  return context
}
export { useBreakpoint, BreakpointProvider }
