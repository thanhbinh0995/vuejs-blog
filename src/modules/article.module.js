import Vue from "vue";
import { ArticlesService, CommentsService, FavoriteService } from "@/services";
import { MUTATIONS_TYPE, ARTICLE_TYPE } from "@/types";

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

export const state = { ...initialState };

export const actions = {
  async [ARTICLE_TYPE.FETCH_ARTICLE](context, articleSlug, prevArticle) {
    // avoid extronuous network call if article exists
    if (prevArticle !== undefined) {
      return context.commit(MUTATIONS_TYPE.SET_ARTICLE, prevArticle);
    }
    const { data } = await ArticlesService.get(articleSlug);
    context.commit(MUTATIONS_TYPE.SET_ARTICLE, data.article);
    return data;
  },
  async [ARTICLE_TYPE.FETCH_COMMENTS](context, articleSlug) {
    const { data } = await CommentsService.get(articleSlug);
    context.commit(MUTATIONS_TYPE.SET_COMMENTS, data.comments);
    return data.comments;
  },
  async [ARTICLE_TYPE.COMMENT_CREATE](context, payload) {
    await CommentsService.post(payload.slug, payload.comment);
    context.dispatch(ARTICLE_TYPE.FETCH_COMMENTS, payload.slug);
  },
  async [ARTICLE_TYPE.COMMENT_DESTROY](context, payload) {
    await CommentsService.destroy(payload.slug, payload.commentId);
    context.dispatch(ARTICLE_TYPE.FETCH_COMMENTS, payload.slug);
  },
  async [ARTICLE_TYPE.FAVORITE_ADD](context, payload) {
    const { data } = await FavoriteService.add(payload);
    context.commit(MUTATIONS_TYPE.UPDATE_ARTICLE_IN_LIST, data.article, {
      root: true
    });
    context.commit(MUTATIONS_TYPE.SET_ARTICLE, data.article);
  },
  async [ARTICLE_TYPE.FAVORITE_REMOVE](context, payload) {
    const { data } = await FavoriteService.remove(payload);
    // Update list as well. This allows us to favorite an article in the Home view.
    context.commit(MUTATIONS_TYPE.UPDATE_ARTICLE_IN_LIST, data.article, {
      root: true
    });
    context.commit(MUTATIONS_TYPE.SET_ARTICLE, data.article);
  },
  [ARTICLE_TYPE.ARTICLE_PUBLISH]({ state }) {
    return ArticlesService.create(state.article);
  },
  [ARTICLE_TYPE.ARTICLE_DELETE](context, slug) {
    return ArticlesService.destroy(slug);
  },
  [ARTICLE_TYPE.ARTICLE_EDIT]({ state }) {
    return ArticlesService.update(state.article.slug, state.article);
  },
  [ARTICLE_TYPE.ARTICLE_EDIT_ADD_TAG](context, tag) {
    context.commit(MUTATIONS_TYPE.TAG_ADD, tag);
  },
  [ARTICLE_TYPE.ARTICLE_EDIT_REMOVE_TAG](context, tag) {
    context.commit(MUTATIONS_TYPE.TAG_REMOVE, tag);
  },
  [ARTICLE_TYPE.ARTICLE_RESET_STATE]({ commit }) {
    commit(MUTATIONS_TYPE.RESET_STATE);
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
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

const getters = {
  article(state) {
    return state.article;
  },
  comments(state) {
    return state.comments;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
