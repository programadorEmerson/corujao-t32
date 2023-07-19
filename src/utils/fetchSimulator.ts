import Constants from '../enums/constants';

import mockData from '../../__mocks__/posts';
import { PostType } from '../types/post';
import { UserType } from '../types/user';

export const returnDataStorage = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);
  if (!data) return null;
  return JSON.parse(data) as T;
};

export async function requestSignin(dataSignin: UserType): Promise<UserType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataSignin);
    }, Constants.TIMEREQUEST);
  });
}

export async function requestPosts(): Promise<PostType[]> {
  return new Promise((resolve) => {
    const posts = returnDataStorage<PostType[]>('posts') || [];
    const updatedPosts = [...posts, ...mockData];
    setTimeout(() => {
      resolve(updatedPosts);
    }, Constants.TIMEREQUEST);
  });
}

export async function requestUserLogged(): Promise<UserType | null> {
  return new Promise((resolve) => {
    const userLogged = returnDataStorage<UserType>('user');
    setTimeout(() => {
      resolve(userLogged);
    }, Constants.TIMEREQUEST);
  });
}
