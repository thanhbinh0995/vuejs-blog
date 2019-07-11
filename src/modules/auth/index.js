import { actions } from "./auth.actions";
import { getters } from "./auth.getters";
import { mutations } from "./auth.mutations";
import { getToken } from "@/services";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!getToken()
};

export default {
  state,
  actions,
  mutations,
  getters
};
