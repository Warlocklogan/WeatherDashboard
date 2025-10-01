<div class="flex flex-col items-center">
  <h2>Welcome Back !</h2>

<div class="login-container">
    <form method="POST" class="login-form p-3">
        <label for="login">Login</label>
        <input id="login" type="text"/>
        
        <label for="password">Password</label>
        <input id="password" type="password"/>

        <a href="#">Forgot password</a>

        <button type="submit" class="rounded-full bg-gray-800 px-4 py-2 mt-2 text-white transition-colors duration-200 hover:bg-gray-700">Login</button>

        <p>Don't have account ? <a href="/signup">Signup</a></p>

    </form>
</div>  
</div>


<style>
    .login-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .login-form {
            display: flex;
            flex-direction: column;
            
        }
    }

</style>