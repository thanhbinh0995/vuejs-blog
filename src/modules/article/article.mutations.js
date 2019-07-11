import Vue from "vue";
import { MUTATIONS_TYPE, ARTICLE_TYPE } from "@/types";

export const mutations = {
  [MUTATIONS_TYPE.SET_ARTICLE](state, article) {
    state.article = article;
  },
  [MUTATIONS_TYPE.SET_COMMENTS](state, comments) {
    state.comments = comments;
  },
  [MUTATIONS_TYPE.TAG_ADD](state, tag) {
    state.article.tagList = state.article.tagList.concat([tag]);
  },
  [MUTATIONS_TYPE.TAG_REMOVE](state, tag) {
    state.article.tagList = state.article.tagList.filter(t => t !== tag);
  },
  [MUTATIONS_TYPE.RESET_STATE]() {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};
