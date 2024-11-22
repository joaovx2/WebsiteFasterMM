// saber quantas coisas tem no Carrinho
import React,{ createContext, useContext, useReducer} from 'react';
//Data Layer
export const StateContext = createContext();
// Build Provider
export const  StateProvider = ({reducer, initialState, children}) => {
    return (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    );
  };


export const useStateValue = () => useContext(StateContext);

export default StateProvider

