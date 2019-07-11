import { actions } from "./article.actions";
import { getters } from "./article.getters";
import { mutations } from "./article.mutations";

const initialState = {
  article: {
    author: {},
    title: "",
    description: "",
    body: "",
    tagList: []
  },
  comments: []
};

const state = { ...initialState };

export default {
  state,
  actions,
  mutations,
  getters
};
