import {API_ROUTER} from '../../services/apiRouter';
import {axiosGet, axiosPost} from '../../services/axiosHelper';

export const LoginUser = data => {
  console.log('payload', data);
  return axiosPost(API_ROUTER.LOGIN_USER, data, 'application/json');
};
export const PostList = data => {
  console.log('payload', data);
  return axiosPost(API_ROUTER.GET_POST_LIST, data, 'multipart/form-data');
};
