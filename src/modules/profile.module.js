import { ApiService } from "@/services";
import { MUTATIONS_TYPE, USER_TYPE } from "@/types";

const state = {
  errors: {},
  profile: {}
};

const getters = {
  profile(state) {
    return state.profile;
  }
};

const actions = {
  [USER_TYPE.FETCH_PROFILE](context, payload) {
    const { username } = payload;
    return ApiService.get("profiles", username)
      .then(({ data }) => {
        context.commit(MUTATIONS_TYPE.SET_PROFILE, data.profile);
        return data;
      })
      .catch(() => {
        // #todo SET_ERROR cannot work in multiple states
        // context.commit(MUTATIONS_TYPE.SET_ERROR, response.data.errors)
      });
  },
  [USER_TYPE.FETCH_PROFILE_FOLLOW](context, payload) {
    const { username } = payload;
    return ApiService.post(`profiles/${username}/follow`)
      .then(({ data }) => {
        context.commit(MUTATIONS_TYPE.SET_PROFILE, data.profile);
        return data;
      })
      .catch(() => {
        // #todo SET_ERROR cannot work in multiple states
        // context.commit(MUTATIONS_TYPE.SET_ERROR, response.data.errors)
      });
  },
  [USER_TYPE.FETCH_PROFILE_UNFOLLOW](context, payload) {
    const { username } = payload;
    return ApiService.delete(`profiles/${username}/follow`)
      .then(({ data }) => {
        context.commit(MUTATIONS_TYPE.SET_PROFILE, data.profile);
        return data;
      })
      .catch(() => {
        // #todo SET_ERROR cannot work in multiple states
        // context.commit(MUTATIONS_TYPE.SET_ERROR, response.data.errors)
      });
  }
};

const mutations = {
  // [MUTATIONS_TYPE.SET_ERROR] (state, error) {
  //   state.errors = error
  // },
  [MUTATIONS_TYPE.SET_PROFILE](state, profile) {
    state.profile = profile;
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
