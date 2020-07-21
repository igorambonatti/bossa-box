import ToolsTypes from "./types";

export function searchWithTags(tech) {
  return {
    type: ToolsTypes.SEARCH_WITH_TAGS,
    payload: { tech },
  };
}
export function searchTools(tech) {
  return {
    type: ToolsTypes.SEARCH_TOOLS,
    payload: { tech },
  };
}
export function loadToolsSucces(data) {
  return {
    type: ToolsTypes.LOAD_TOOLS,
    payload: { data },
  };
}
