/* eslint-disable */
import { httpMethod } from '@/utils/axios-config';
import { catchError } from '@/utils/error';

export default {
  getUsers: async (param?: any) => await httpMethod('post', '/users', param).catch(catchError),
  getFavorite: () => httpMethod('get', `/users`).catch(catchError),
  getFavoriteParam: (param) => httpMethod('get', '/posts', param).catch(catchError),
  delFavorite: (id) => httpMethod('delete', `/favorite/${id}`).catch(catchError),
  addFavorite: (param) => httpMethod('post', '/favorite/create', param).catch(catchError),
  editFavorite: (param) => httpMethod('put', '/favorite/update', param).catch(catchError),
  editFavoriteId: (id?: any, param?: any) => httpMethod('put', `/favorite/${id}`, param).catch(catchError),
};
