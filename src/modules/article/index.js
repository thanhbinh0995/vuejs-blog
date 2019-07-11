import { actions } from "./article.actions";
import { getters } from "./article.getters";
import { mutations } from "./article.mutations";
import { initialState } from "./article.state";

const state = { ...initialState };

export default {
  state,
  actions,
  mutations,
  getters
};
