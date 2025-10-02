<header>
	<nav class="nav grid grid-cols-2 rounded-b-xl bg-white p-4 align-middle shadow-sm">
		<ul class="ml-2.5">
			<li><a href="/"><h1 class="text-2xl font-bold text-gray-800">WeatherWise</h1></a></li>
		</ul>
		<ul class="mr-2.5 flex flex-row items-center justify-end gap-4">
			<li>
				<a class="text-gray-600 transition-colors duration-200 hover:text-gray-800" href="/login"
					>Login</a
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	.nav {
		a:has(h1) {
			text-decoration: none;
		}
	}
</style>
