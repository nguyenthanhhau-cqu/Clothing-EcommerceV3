import { GET_CURRENT_USER } from "./type";
export const setCurrentUser = (user) => ({
  type: GET_CURRENT_USER,
  payload: user,
});
