<script lang="ts">
	import Weather from '$lib/components/weather-icon.svelte';
	import PercentageGauge from '$lib/components/percentage-gauge.svelte';
	import { getCurrentWeather } from '$lib/mockData/weather';

	const currentWeatherPromise = getCurrentWeather();
</script>

<div class="grid h-full grid-cols-6 grid-rows-6">
	{#await currentWeatherPromise}
		Loading Current Weather...
	{:then currentWeather}
		<div
			class="col-start-1 col-end-4 row-start-1 row-end-7 m-5 flex rounded-3xl border border-blue-100 bg-blue-200"
		>
			<div class="grid flex-1 auto-rows-auto">
				<Weather weather={currentWeather.weather[0].state}></Weather>
				<h2 class="text-6xl">
					{currentWeather.main.temp}°c
					<span class="text-3xl">| Feels like {currentWeather.main.feels_like}</span>
				</h2>
				<div class="grid grid-cols-3 grid-rows-2 gap-3 p-5">
					<div class="card row-start-1 row-end-2 flex justify-center">
						<div class="flex flex-col gap-1.5">
							<p>Humidity</p>
							<PercentageGauge progress={currentWeather.main.humidity} />
						</div>
					</div>
					<div class="card row-start-1 row-end-2 flex justify-center">
						<div class="flex flex-col">
							<p>Temp Min / Temp Max</p>
							<p>Max: {currentWeather.main.temp_max}°c</p>
							<p>Min: {currentWeather.main.temp_min}°c</p>
						</div>
					</div>
					<div class="card row-start-1 row-end-2 flex justify-center">
						<div class="flex flex-col">
							<p>Wind Speed / Deg</p>
							<p>{currentWeather.wind.speed} m/s at {currentWeather.wind.deg}°</p>
						</div>
					</div>
					<div class="card col-start-1 row-start-2 flex justify-center">
						<div class="flex flex-col gap-1.5">
							<p>Cloud coverage</p>
							<PercentageGauge progress={currentWeather.clouds.all} />
						</div>
					</div>
					{#if currentWeather?.rain}
						<div class="card col-start-2 row-start-2 flex justify-center">
							<div class="flex flex-col gap-1.5">
								<p>Rain mm/h</p>
								{#if currentWeather?.rain}
									<p>{currentWeather?.rain['1h']} mm/h</p>
								{/if}
							</div>
						</div>
					{:else if currentWeather?.snow}
						<div class="card col-start-2 row-start-2 flex justify-center">
							<div class="flex flex-col gap-1.5">
								<p>Snow mm/h</p>
								{#if currentWeather?.snow}
									<p>{currentWeather?.snow['1h']} mm/h</p>
								{/if}
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/await}
	<div class="col-start-4 col-end-7 row-start-1 row-end-5 bg-amber-500">Forthcoming Forecast</div>
	<div class="col-start-4 col-end-7 row-start-5 row-end-7 bg-green-500">Air Quality</div>
</div>

<style>
	.card {
		border-radius: var(--radius-2xl);
		border: 1px solid var(--color-gray-400);
		padding: var(--spacing);
		p {
			margin-bottom: 0;
		}
	}
</style>
