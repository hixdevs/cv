import createPersistedState from "use-persisted-state"

export const useTheme = createPersistedState("theme")
export const useContent = createPersistedState("content")
