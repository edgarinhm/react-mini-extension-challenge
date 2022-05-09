import { combineReducers } from "redux";
import localForage from "localforage";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import session, { SessionState } from "./features/session-reducer";

const sessionPersistConfig = {
  key: "session",
  storage: localForage,
  whitelist: ["authenticated", "accessToken"],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  session: persistReducer<SessionState>(sessionPersistConfig, session),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
