import { MUTATIONS_TYPE } from "@/types";

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [MUTATIONS_TYPE.SET_ARTICLE](state, article) {
    state.article = article;
  },
  [MUTATIONS_TYPE.SET_COMMENTS](state, comments) {
    state.comments = comments;
  }
};
