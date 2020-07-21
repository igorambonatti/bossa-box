import produce from "immer";
import ToolsTypes from "./types";

const INITIAL_STATE = {
  tools: [],
};

// *Reducer ignorando o saga

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ToolsTypes.LOAD_TOOLS:
        draft.tools = action.payload.data;
        break;
      default:
    }
  });
}
