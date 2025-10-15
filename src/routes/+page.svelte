<script lang="ts">
	import Weather from '$lib/components/weather-icon.svelte';
	import PercentageGauge from '$lib/components/percentage-gauge.svelte';
	import { getCurrentWeather } from '$lib/mockData/weather';
	import ForecastTile from '$lib/components/forecast-tile.svelte';
	import { kelvinToHumanCelsius } from '$lib/weather-tools';
	import { getWeatherForecast, type WeatherRecord } from '$lib/mockData/forecast';

	const currentWeatherPromise = getCurrentWeather();
	const weatherForecast = getWeatherForecast();
</script>

<div class="grid h-full grid-cols-6 grid-rows-6">
	{#await currentWeatherPromise}
		Loading Current Weather...
	{:then currentWeather: WeatherRecord}
		<div
			class="col-start-1 col-end-4 row-start-1 row-end-7 m-5 flex rounded-3xl border border-blue-100 bg-gradient-to-b from-blue-300 to-white"
		>
			<div class="grid flex-1 grid-cols-2 grid-rows-2">
				<p class="flex flex-col items-center justify-center">
					<span class="self-center justify-self-end text-7xl font-extrabold"
						>{kelvinToHumanCelsius(currentWeather.main.temp)}°c</span
					>
					<span
						>{currentWeather.weather[0].description} | Feels like {kelvinToHumanCelsius(
							currentWeather.main.feels_like
						)}°c</span
					>
				</p>
				<div class="flex items-center justify-center">
					<Weather weather={currentWeather.weather[0].state}></Weather>
				</div>
				<div class="col-span-2 grid grid-cols-3 grid-rows-2 gap-3 p-5">
					<div class="card row-start-1 row-end-2 flex justify-center">
						<div class="flex w-full flex-col items-center justify-start gap-1.5">
							<p>Humidity</p>
							<PercentageGauge progress={currentWeather.main.humidity} />
						</div>
					</div>
					<div class="card row-start-1 row-end-2 flex justify-center">
						<div class="flex w-full flex-col items-center justify-start gap-1.5">
							<p>Temperature</p>
							<p>Max: {kelvinToHumanCelsius(currentWeather.main.temp_max)}°c</p>
							<p>Min: {kelvinToHumanCelsius(currentWeather.main.temp_min)}°c</p>
						</div>
					</div>
					<div class="card row-start-1 row-end-2 flex justify-center">
						<div class="flex w-full flex-col">
							<p>Wind</p>
							<p>{currentWeather.wind.speed} m/s at {currentWeather.wind.deg}°</p>
						</div>
					</div>
					<div class="card col-start-1 row-start-2 flex justify-center">
						<div class="flex w-full flex-col items-center justify-start gap-1.5">
							<p>Cloud coverage</p>
							<PercentageGauge progress={currentWeather.clouds.all} />
						</div>
					</div>
					{#if currentWeather?.rain}
						<div class="card col-start-2 row-start-2 flex justify-center">
							<div class="flex w-full flex-col items-center justify-start gap-1.5">
								<p>Precipitation</p>
								{#if currentWeather?.rain}
									<p>{currentWeather?.rain['1h']} mm/h</p>
								{/if}
							</div>
						</div>
					{:else if currentWeather?.snow}
						<div class="card col-start-2 row-start-2 flex justify-center">
							<div class="flex flex-col items-center justify-start gap-1.5">
								<p>Snow</p>
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
	<section class="col-start-4 col-end-7 row-start-1 row-end-5 bg-amber-500">
		<h2>5-Day Forecast</h2>
		<ul>
			{#await weatherForecast then forecasts}
				{#each forecasts as forecast}
					<ForecastTile></ForecastTile>
				{/each}
			{/await}
		</ul>
	</section>
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
