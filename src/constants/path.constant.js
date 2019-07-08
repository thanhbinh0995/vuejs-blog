const PATH_URL = {
  HOME: {
    path: "/",
    name: "",
    GLOBAL: {
      path: "",
      name: "home"
    },
    FEED: {
      path: "my-feed",
      name: "home-my-feed"
    },
    TAG: {
      path: "tag/:tag",
      name: "home-tag"
    }
  },
  LOGIN: {
    name: "login",
    path: "/login"
  },
  REGISTER: {
    name: "register",
    path: "/register"
  },
  SETTING: {
    name: "settings",
    path: "/settings"
  },
  PROFILE: {
    path: "/@:username",
    name: "",
    INDEX: {
      path: "",
      name: "profile"
    },
    FAVORITE: {
      name: "profile-favorites",
      path: "favorites"
    }
  },
  ARTICLE: {
    path: "/",
    name: "",
    INDEX: {
      name: "article",
      path: "/articles/:slug"
    },
    EDIT: {
      name: "article-edit",
      path: "/editor/:slug?"
    }
  }
};

export { PATH_URL };
