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
export function removeTool(id) {
  return {
    type: ToolsTypes.REMOVE_TOOL,
    payload: { id },
  };
}
export function reloadTools() {
  return {
    type: ToolsTypes.RELOAD_TOOLS,
    payload: {},
  };
}
export function createTool(data) {
  return {
    type: ToolsTypes.CREATE_TOOL,
    payload: { data },
  };
}
