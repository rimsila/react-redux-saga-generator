import { catchError } from '@/utils/error';
import { httpMethod } from '@/utils/axios-config';

const booksApi = {
  getBooks: () => httpMethod('get', `/users`).catch(catchError),
  getBooksParam: param => httpMethod('get', '/books', param).catch(catchError),
  delBooks: id => httpMethod('delete', `/books/${id}`).catch(catchError),
  addBooks: param => httpMethod('post', '/books/create', param).catch(catchError),
  editBooks: param => httpMethod('put', '/books/update', param).catch(catchError),
  editBooksId: (id?: any, param?: any) => httpMethod('put', `/books/${id}`, param).catch(catchError),
};
export default booksApi;
