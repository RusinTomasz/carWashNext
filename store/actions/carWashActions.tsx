import * as types from "../types";

export const setPosts = (posts) => async (dispatch: any) => {
  dispatch({
    type: types.GET_POSTS_SERVER,
    payload: posts,
  });
};
