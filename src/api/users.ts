/* eslint-disable prettier/prettier */
import { catchError } from '@/utils/error';
import { httpMethod } from '@/utils/axios-config';

const IUsersStateApi = {
  getUsers: () => httpMethod('get', `/IUsersState`).catch(catchError),
  getUsersParam: param => httpMethod('get', '/IUsersState', param).catch(catchError),
  delUsers: id => httpMethod('delete', `/IUsersState/${id}`).catch(catchError),
  addUsers: param => httpMethod('post', '/IUsersState/create', param).catch(catchError),
  editUsers: param => httpMethod('put', '/IUsersState/update', param).catch(catchError),
  editUsersId: (id?: any, param?: any) => httpMethod('put', `/IUsersState/${id}`, param).catch(catchError),
};
export default IUsersStateApi;
