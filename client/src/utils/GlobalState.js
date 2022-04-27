import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';
// useContext is a react hook allows us to use the state created by createContext

const StoreContext = createContext();
//create context used to initiate a new context object. Create a contatiner to hold our
// global state data and functionatilty to insert it into react


const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };

  // used to insert the newly created component into the react app
  const useStoreContext = () => {
    return useContext(StoreContext);
  };

  export { StoreProvider, useStoreContext };