"use server"
import { useCreateUserRepository, useDeleteUserRepository, useUsersRepository } from "../repositories/useRepository";




export const addData = async (e: FormData) => {

  const realname = e.get("realname")?.toString();
  const email = e.get("email")?.toString();
  const role = e.get("role")?.toString(); // Use getAll to get all values for the key "roles"
  const password = e.get("password")?.toString();

  if (!realname||!email || !password || !role) return;

  const newData: any = {
    realname,
    email,
    role,
    password,
  };
console.log({newData})
  const userRepository = useCreateUserRepository();
  try {
   const data =  await userRepository.create(newData);
   console.log({data})
    console.log('User created successfully');
return data
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }

    // Handle other types of errors if needed
    return {
      error: 'An unexpected error occurred',
    };
  }

}



export const getUsers = async () => {
  const apiUrl = process.env.NEXTAUTH_URL
  const res = await fetch(`${apiUrl}/api/register`);
  const data = await res.json();
  return data.users;
  
};








export const userData = async () => {
  const userRepository = useUsersRepository();
  const data = await userRepository.getAll();
  return data

}






