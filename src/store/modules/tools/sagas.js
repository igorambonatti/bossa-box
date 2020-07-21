import { all, takeLatest, call, put } from "redux-saga/effects";
import ToolsTypes from "./types";

import { loadToolsSucces } from "./action";

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

export default all([
  takeLatest(ToolsTypes.SEARCH_WITH_TAGS, searchToolsWithTags),
  takeLatest(ToolsTypes.SEARCH_TOOLS, searchTools),
]);
