
 import { User } from '@/types/user';
import {  UserWithPermission } from '@/types/userPermission';
import { useGenericRepository } from './genericRepository';

export const useUsersRepository = () => {
  const NEXTAUTH_URL = process.env.NEXTAUTH_URL

  const apiUrl = `${NEXTAUTH_URL}/api/register`;
  return useGenericRepository<User>(apiUrl);
};

export const useUsersWithPermissionRepository = () => {
  const NEXTAUTH_URL = process.env.NEXTAUTH_URL

  const apiUrl = `${NEXTAUTH_URL}/api/register`;
  return useGenericRepository<UserWithPermission>(apiUrl);
};



export const useDeleteUserRepository = () => {
  const NEXTAUTH_URL = process.env.NEXTAUTH_URL

  const apiUrl = `${NEXTAUTH_URL}/api/register?id=`; 

  return useGenericRepository<any>(apiUrl);
};


export const useCreateUserRepository = () => {
  const NEXTAUTH_URL = process.env.NEXTAUTH_URL

  const apiUrl = `${NEXTAUTH_URL}/api/register`; 

  return useGenericRepository<User>(apiUrl);
};



