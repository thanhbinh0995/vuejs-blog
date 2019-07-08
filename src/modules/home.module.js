import { TagsService, ArticlesService } from "@/services";
import { MUTATIONS_TYPE, ARTICLE_TYPE, USER_TYPE } from "@/types";

const state = {
  tags: [],
  articles: [],
  isLoading: true,
  articlesCount: 0
};

const getters = {
  articlesCount(state) {
    return state.articlesCount;
  },
  articles(state) {
    return state.articles;
  },
  isLoading(state) {
    return state.isLoading;
  },
  tags(state) {
    return state.tags;
  }
};

const actions = {
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

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
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

export default {
  state,
  getters,
  actions,
  mutations
};
