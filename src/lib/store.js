import createPersistedState from "use-persisted-state"

export const useTheme = createPersistedState("theme")
export const useContent = createPersistedState("content")
export const useSelectedLayout = createPersistedState("selectedLayout")
export const useSelectedRadioLayout = createPersistedState(
  "selectedRadioLayout",
)
