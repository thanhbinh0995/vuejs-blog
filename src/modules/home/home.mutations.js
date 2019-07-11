import { MUTATIONS_TYPE } from "@/types";

export const mutations = {
  [MUTATIONS_TYPE.FETCH_START](state) {
    state.isLoading = true;
  },
  [MUTATIONS_TYPE.FETCH_END](state, { articles, articlesCount }) {
    state.articles = articles;
    state.articlesCount = articlesCount;
    state.isLoading = false;
  },
  [MUTATIONS_TYPE.SET_TAGS](state, tags) {
    state.tags = tags;
  },
  [MUTATIONS_TYPE.UPDATE_ARTICLE_IN_LIST](state, data) {
    state.articles = state.articles.map(article => {
      if (article.slug !== data.slug) {
        return article;
      }
      // We could just return data, but it seems dangerous to
      // mix the results of different api calls, so we
      // protect ourselves by copying the information.
      article.favorited = data.favorited;
      article.favoritesCount = data.favoritesCount;
      return article;
    });
  }
};
