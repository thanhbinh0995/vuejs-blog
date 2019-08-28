import { MUTATIONS_TYPE } from "@/types";
import { destroyToken, saveToken } from "../../services";

export const mutations = {
  [MUTATIONS_TYPE.SET_ERROR](state, error) {
    state.errors = error;
  },
  [MUTATIONS_TYPE.SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    saveToken(state.user.token);
  },
  [MUTATIONS_TYPE.PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    destroyToken();
  }
};
