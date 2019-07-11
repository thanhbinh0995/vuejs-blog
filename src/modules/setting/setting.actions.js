import { ArticlesService, CommentsService } from "@/services";
import { MUTATIONS_TYPE, ARTICLE_TYPE } from "@/types";

export const actions = {
  [ARTICLE_TYPE.FETCH_ARTICLE](context, articleSlug) {
    return ArticlesService.get(articleSlug)
      .then(({ data }) => {
        context.commit(MUTATIONS_TYPE.SET_ARTICLE, data.article);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [ARTICLE_TYPE.FETCH_COMMENTS](context, articleSlug) {
    return CommentsService.get(articleSlug)
      .then(({ data }) => {
        context.commit(MUTATIONS_TYPE.SET_COMMENTS, data.comments);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};
