import { MUTATIONS_TYPE } from "@/types";

export const mutations = {
  // [MUTATIONS_TYPE.SET_ERROR] (state, error) {
  //   state.errors = error
  // },
  [MUTATIONS_TYPE.SET_PROFILE](state, profile) {
    state.profile = profile;
    state.errors = {};
  }
};
