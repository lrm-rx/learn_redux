import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  tabs: ["全部", "未勾选", "已勾选"],
  active: "全部",
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.UPDATEACTIVE_FOOTER:
      return state.set("updateActive", action.updateActive);
    default:
      return state;
  }
}

export { reducer };
