import { combineReducers } from "redux-immutable";

import { reducer as todosReducer } from "./todosStroe";
import { reducer as footerReducer } from "./footerStore";

const cReducer = combineReducers({
  todos: todosReducer,
  footer: footerReducer,
});

export default cReducer;
