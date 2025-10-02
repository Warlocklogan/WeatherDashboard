<script lang="ts">
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<div class="flex flex-col items-center h-full justify-center">
    <div class="max-w-3xl rounded-2xl border border-gray-300 p-8">
        <h2 class="font-bold text-2xl text-center">Create your account!</h2>
        <form method="POST" class="login-form p-2 flex flex-col gap-2">
            <div class="form-group">
                <label for="login">Login</label>
                <input id="login" type="text" name="login" required/>
            </div>
            <div class="form-group">
                <label for="firstname">Fistname</label>
                <input id="firstname" type="text" name="firstname" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" name="password" required/>
            </div>

            <button type="submit" class="rounded-full bg-gray-800 px-4 py-2 mt-2 text-white transition-colors duration-200 hover:bg-gray-700">Sign</button>
            
            <p>Already have account? <a href="/login">Login</a></p>

            {#if form?.success}
                <p>Acount Successfully created!</p>
            {:else if !form?.success}
                <p>An error occured</p>
            {/if}
        </form>
    </div>
</div>