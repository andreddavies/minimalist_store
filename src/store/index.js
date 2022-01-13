import { models } from "./models";
import { init } from "@rematch/core";
import createPersistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage/session";

const persistPlugin = createPersistPlugin({
  key: "minimalistStoreRoot",
  storage,
});

export const store = init({
  models,
  plugins: [persistPlugin],
});
