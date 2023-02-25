import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  todoList: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.TODOLIST:
      return state.set("todoList", action.todoList);
    default:
      return state;
  }
}

export { reducer };
