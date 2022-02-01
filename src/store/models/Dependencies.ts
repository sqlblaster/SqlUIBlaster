import { ajax } from 'rxjs/ajax';

const { get, getJSON, post, put } = ajax;
export const dependencies = {
  get,
  getJSON,
  post,
  put,
  delete: ajax.delete
};

export type Dependencies = typeof dependencies;
