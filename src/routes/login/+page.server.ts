import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import *  as User from '$lib/server/user'


export const actions = {    
    default: async ({ cookies, request }) => {
	   const data = await request.formData();
       const login = data.get('login');

        if (!login) {
            return fail(400, {login, missing:true });
        } 

        const user = await User.getUser(login);

        if (!user) {
            return fail(400, {login, incorrect: true})
        }

        cookies.set('sessionid', await User.createSession(user.id), { path: '/' });
        
       return { success: true };
    },
} satisfies Actions