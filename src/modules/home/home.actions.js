import { TagsService, ArticlesService } from "@/services";
import { MUTATIONS_TYPE, ARTICLE_TYPE, USER_TYPE } from "@/types";

export const actions = {
  [ARTICLE_TYPE.FETCH_ARTICLES]({ commit }, params) {
    commit(MUTATIONS_TYPE.FETCH_START);
    return ArticlesService.query(params.type, params.filters)
      .then(({ data }) => {
        commit(MUTATIONS_TYPE.FETCH_END, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [USER_TYPE.FETCH_TAGS]({ commit }) {
    return TagsService.get()
      .then(({ data }) => {
        commit(MUTATIONS_TYPE.SET_TAGS, data.tags);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};
