import { useReducer } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';
import StateReducer, { initialState } from './State';

export const StoreProvider = ({ children, ...props }) => {
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

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
