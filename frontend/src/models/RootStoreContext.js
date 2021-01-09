import React from "react";

/**
 * Create a context we can use to
 * - Provide access to our stores from our root component
 * - Consume stores in our screens (or other components, though it's
 *   preferable to just connect screens)
 */
// const RootStoreContext = createContext();

// /**
//  * The provider our root component will use to expose the root store
//  */
// export const RootStoreProvider = RootStoreContext.Provider;

// /**
//  * A hook that screens can use to gain access to our stores, with
//  * `const { someStore, someOtherStore } = useStores()`,
//  * or less likely: `const rootStore = useStores()`
//  */
// export const useStores = () => useContext(RootStoreContext);

//------------------------------------------------------------------

const RootStoreContext = React.createContext();

export const RootStoreProvider = RootStoreContext.Provider;


// export const RootStoreProvider = ({ children, store }) => {
//     return (
//       <RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>
//     );
// };

export const useStores = () => React.useContext(RootStoreContext);
