import React from "react"
import { IRootStore } from "@MSTRoot"


// Create a context we can use to:
// ↪ Provide access to our stores from our root component
// ↪ Consume stores in our routes (or other components, though it's preferable to just connect screens
export const RootStoreContext = React.createContext<IRootStore>({} as IRootStore)


// A Hook that components can use to gain access to the store.
// ↪ this prevents having to bloat each page with this line directly
// ↪ simple use `const { someStore, someOtherStore } = useStores()`
// ↪ or `const rootStore = useStores()`
export const MSTContext = () => React.useContext(RootStoreContext)


// The provider our root component will use to expose the root store
// ↪ This will wrap the entire application with <MSTProvider value={...}>
// ↪ We simple added `.Provider` in this export to simplify <MSTProvider.Provider value={...}
export const MSTProvider = RootStoreContext.Provider

