import { getToken } from "@/services";

export const initialState = {
  errors: null,
  user: {},
  isAuthenticated: !!getToken()
};
