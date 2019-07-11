import { actions } from "./home.actions";
import { getters } from "./home.getters";
import { mutations } from "./home.mutations";

const state = {
  tags: [],
  articles: [],
  isLoading: true,
  articlesCount: 0
};

export default {
  state,
  actions,
  mutations,
  getters
};
