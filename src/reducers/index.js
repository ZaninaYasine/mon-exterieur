/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const initialState = {
  workBanner: "/static/media/banner.001d3aef.png",
};

const mainReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_IMAGE") {
    return {
      workBanner: action.image,
    };
  }
  return { ...state };
};

export default mainReducer;
