import { DispatchTypes } from "./types";

export const initialState = {
  inputValue: "",
  page: 1,
};

export const StateReducer = (action, state = initialState) => {
  switch (action.type) {
    case DispatchTypes.InputValue:
      return {
        ...state,
        inputValue: action.payload.inputValue,
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
