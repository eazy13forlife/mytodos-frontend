import types from "./types.js";

const addRecentlyCompleted = (id) => {
  return {
    type: types.ADD_RECENTLY_COMPLETED,
    payload: id,
  };
};

const removeRecentlyCompleted = () => {
  return {
    type: types.REMOVE_RECENTLY_COMPLETED,
  };
};

export { addRecentlyCompleted, removeRecentlyCompleted };
