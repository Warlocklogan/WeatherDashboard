<div class="flex flex-col items-center w-full">

  <h2>Create your acccount</h2>

<div class="signup-container flex flex-col items-center justify-center w-full">
    <form method="POST" class="signup-form p-3 flex flex-col bg-blue-200 rounded-2xl min-w-1/2">
        <div class="form-group">
            <label for="login">Login</label>
            <input id="login" type="text"/>
        </div>
        <div class="form-group">
            <label for="firstname">Fistname</label>
            <input id="firstname" type="text"/>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password"/>
        </div>
        <button type="submit" class="rounded-full bg-blue-800 px-4 py-2 mt-2 text-white transition-colors duration-200 hover:bg-blue-700">Sign</button>
        
        <p>Already have account? <a href="/login">Login</a></p>

    </form>
</div>  
</div>


<style>
    .form-group {
        display: flex;
        flex-direction: column;
    }

</style>