import types from "../actions/types.js";

const recentlyCompletedReducer = (state = null, action) => {
  switch (action.type) {
    case types.ADD_RECENTLY_COMPLETED:
      return action.payload;
    case types.REMOVE_RECENTLY_COMPLETED:
      return null;
    default:
      return state;
  }
};

export default recentlyCompletedReducer;
