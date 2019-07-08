import { ApiService } from "@/services";
import { getToken, saveToken, destroyToken } from "@/services";
import { MUTATIONS_TYPE, USER_TYPE } from "@/types";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [USER_TYPE.LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("users/login", { user: credentials })
        .then(({ data }) => {
          context.commit(MUTATIONS_TYPE.SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(MUTATIONS_TYPE.SET_ERROR, response.data.errors);
        });
    });
  },
  [USER_TYPE.LOGOUT](context) {
    context.commit(MUTATIONS_TYPE.PURGE_AUTH);
  },
  [USER_TYPE.REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", { user: credentials })
        .then(({ data }) => {
          context.commit(MUTATIONS_TYPE.SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(MUTATIONS_TYPE.SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },
  [USER_TYPE.CHECK_AUTH](context) {
    if (getToken()) {
      ApiService.setHeader();
      ApiService.get("user")
        .then(({ data }) => {
          context.commit(MUTATIONS_TYPE.SET_AUTH, data.user);
        })
        .catch(({ response }) => {
          context.commit(MUTATIONS_TYPE.SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(MUTATIONS_TYPE.PURGE_AUTH);
    }
  },
  [USER_TYPE.UPDATE_USER](context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = {
      email,
      username,
      bio,
      image
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      context.commit(MUTATIONS_TYPE.SET_AUTH, data.user);
      return data;
    });
  }
};

const mutations = {
  [MUTATIONS_TYPE.SET_ERROR](state, error) {
    state.errors = error;
  },
  [MUTATIONS_TYPE.SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    saveToken(state.user.token);
  },
  [MUTATIONS_TYPE.PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
