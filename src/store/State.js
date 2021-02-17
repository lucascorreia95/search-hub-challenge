import { DispatchTypes } from './types';

export const initialState = {
  inputValue: '',
  page: 1,
  radioValue: 'users',
};

export const StateReducer = (action, state = initialState) => {
  switch (action.type) {
    case DispatchTypes.SearchParams:
      return {
        ...state,
        inputValue: action.payload.inputValue,
        radioValue: action.payload.radioValue,
        page: 1,
      };
    case DispatchTypes.Page:
      return {
        ...state,
        page: action.payload.page,
      };
    default:
      return state;
  }
};

export default StateReducer;
