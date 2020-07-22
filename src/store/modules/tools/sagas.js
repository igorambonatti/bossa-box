import { all, takeLatest, call, put } from "redux-saga/effects";
import ToolsTypes from "./types";

import { loadToolsSucces, reloadTools } from "./action";

import api from "../../../services/api";

export function* searchToolsWithTags({ payload }) {
  try {
    const response = yield call(api.get, `/tools?tags_like=${payload.tech}`);
    yield put(loadToolsSucces(response.data));
  } catch (err) {}
}

export function* searchTools({ payload }) {
  try {
    const response = yield call(api.get, `/tools?q=${payload.tech}`);
    yield put(loadToolsSucces(response.data));
  } catch (err) {}
}
export function* removeTool({ payload }) {
  try {
    yield call(api.delete, `/tools/${payload.id}`);
    yield put(reloadTools());
  } catch (err) {}
}
export function* reloadToolss() {
  try {
    const response = yield call(api.get, `/tools`);
    yield put(loadToolsSucces(response.data));
  } catch (err) {}
}
export function* createTool({ payload }) {
  try {
    const { title, link, description, tags } = payload.data.data;
    const headers = {
      "Content-Type": "application/json",
    };
    const tagSeparator = tags.split(",");
    yield call(
      api.post,
      "/tools",
      {
        title,
        link,
        description,
        tags: tagSeparator,
      },
      { headers: headers }
    );
    yield put(reloadTools());
  } catch (err) {}
}

export default all([
  takeLatest(ToolsTypes.SEARCH_WITH_TAGS, searchToolsWithTags),
  takeLatest(ToolsTypes.SEARCH_TOOLS, searchTools),
  takeLatest(ToolsTypes.REMOVE_TOOL, removeTool),
  takeLatest(ToolsTypes.RELOAD_TOOLS, reloadToolss),
  takeLatest(ToolsTypes.CREATE_TOOL, createTool),
]);
