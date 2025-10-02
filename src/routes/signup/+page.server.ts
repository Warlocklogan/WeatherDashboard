import *  as User from '$lib/server/user'
import type { Actions } from './$types';

export const actions = {
    default: async ({ cookies, request }) => {
	   const data = await request.formData();
       const uid = await User.signup(data.get('login'), data.get('password'))
       console.log("submited", data, uid);
       return {success: true};
    }
} satisfies Actions