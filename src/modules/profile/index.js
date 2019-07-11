import { actions } from "./profile.actions";
import { getters } from "./profile.getters";
import { mutations } from "./profile.mutations";

const state = {
  errors: {},
  profile: {}
};

export default {
  state,
  actions,
  mutations,
  getters
};
