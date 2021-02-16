import StateReducer from "./State";
import { DispatchTypes } from "./types";
import { initialState } from "./index";

describe("State store", () => {
  it("Should return state with search params", () => {
    const fakeAction = {
      type: DispatchTypes.SearchParams,
      payload: { inputValue: "test", radioValue: "users" },
    };

    const returnValue = StateReducer(fakeAction);

    expect(returnValue).toEqual(
      expect.objectContaining({
        inputValue: "test",
        radioValue: "users",
      })
    );
  });

  it("Should return state with new page value", () => {
    const fakeAction = {
      type: DispatchTypes.Page,
      payload: { page: 2 },
    };

    const returnValue = StateReducer(fakeAction);

    expect(returnValue).toEqual(
      expect.objectContaining({
        inputValue: "",
        radioValue: "users",
        page: 2,
      })
    );
  });

  it("Should return current state when type is invalid", () => {
    const fakeAction = {
      type: "invalid_type",
      payload: { page: 2 },
    };

    const returnValue = StateReducer(fakeAction);

    expect(returnValue).toEqual(
      expect.objectContaining({
        ...initialState,
      })
    );
  });
});
