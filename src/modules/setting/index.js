import { actions } from "./setting.actions";
import { getters } from "./setting.getters";
import { mutations } from "./setting.mutations";

export const state = {
  article: {},
  comments: []
};

export default {
  state,
  actions,
  mutations
};
