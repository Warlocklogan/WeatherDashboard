import *  as User from '$lib/server/user'

export const actions = {
    default: async ({ cookies, request }) => {
	   const data = await request.formData();
       const uid = User.signup(data.get('login'), data.get('password'))
       console.log("submited", data, uid);
    },
}