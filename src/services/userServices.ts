import { createUser, User } from "../models/userModel";


export const saveUser = async (profile: any) => {
    const user: User = {  
        name: profile.displayName,
        email: profile.emails![0].value
     }

     try {
        const result = await createUser(user);
        return result;
      } catch (error) {
        console.error('Error saving user:', error);
        throw new Error('Unable to save user');
      }
};