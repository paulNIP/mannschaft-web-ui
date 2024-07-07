import { request } from '@umijs/max';
import {API_URL} from '../../../constants/constants';

export interface StateType {
  status?: 'ok' | 'error';
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface UserRegisterParams {
  username:string
  email: string;
  password: string;
}

export async function fakeRegister(params: UserRegisterParams) {
  return request(API_URL+'api/auth/signup', {
    method: 'POST',
    data: params,
  });
}
