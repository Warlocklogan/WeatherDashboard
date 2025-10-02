<script lang="ts">
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<div class="flex flex-col items-center h-full justify-center">
    <div class="max-w-3xl rounded-2xl border border-gray-300 p-8">
        <h2 class="font-bold text-2xl text-center">Welcome Back!</h2>
        <form method="POST" class="login-form p-2 flex flex-col gap-2">
            {#if form?.missing}<p class="error">The login field is required</p>{/if}
	        {#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
            <div class="form-group">
                <label for="login">Login</label>
                <input id="login" type="text" name="login" required value={form?.login ?? ''}/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" name="password" required/>
            </div>
            <a href="/reset-password">Forgot password</a>

            <button class="rounded-full bg-gray-800 px-4 py-2 mt-2 text-white transition-colors duration-200 hover:bg-gray-700">Login</button>

            <p>Don't have account ? <a href="/signup">Signup</a></p>
        </form>
    </div>
</div>

