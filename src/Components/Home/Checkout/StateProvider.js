import React, { createContext, useContext, useReducer } from "react";

// Data Layer
export const StateContext = createContext();

// Provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull info from Data Layer
export const useStateValue = () => useContext(StateContext);
