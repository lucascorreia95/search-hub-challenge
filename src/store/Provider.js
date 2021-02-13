import { useReducer } from "react";

import Context from "./Context";
import StateReducer, { initialState } from "./State";

export const DocumentoProvider = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(
    (reducerState, action) => StateReducer(action, reducerState),
    initialState
  );

  return (
    <Context.Provider value={{ state, dispatch, ...props }}>
      {children}
    </Context.Provider>
  );
};

export default DocumentoProvider;
