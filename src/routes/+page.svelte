<script lang="ts">
	import Weather from '$lib/components/weather-icon.svelte';
	import PercentageGauge from '$lib/components/percentage-gauge.svelte';
	import { getCurrentWeather } from '$lib/mockData/weather';
	import ForecastTile from '$lib/components/forecast-tile.svelte';
	import { kelvinToHumanCelsius } from '$lib/weather-tools';
	import { getWeatherForecast } from '$lib/mockData/forecast';
	import { type WeatherRecord } from '$lib/types/Weather';
	import HourlyForecastTile from '$lib/components/hourly-forecast-tile.svelte';
	import { getCurrentAirQuality } from '$lib/mockData/airQuality';
	import AirQuality from '$lib/components/air-quality.svelte';

	const currentWeatherPromise = getCurrentWeather();
	const weatherForecast = getWeatherForecast();
	const airQuality = getCurrentAirQuality();
</script>

<div class="grid h-full grid-cols-6 grid-rows-6 gap-3">
	{#await currentWeatherPromise}
		Loading Current Weather...
	{:then currentWeather: WeatherRecord}
		<section
			class="col-start-1 col-end-5 row-start-1 row-end-7 flex rounded-3xl border border-blue-100 bg-gradient-to-b from-blue-300 to-white"
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
		</section>
	{/await}
	<section class="col-span-6 col-start-1">
		{#await weatherForecast then forecasts}
			<ul class="grid grid-cols-8 gap-x-3">
				{#each forecasts[0].forecast as forecast}
					<HourlyForecastTile {forecast}></HourlyForecastTile>
				{/each}
			</ul>
		{/await}
	</section>
	<section
		class="border-gray-10 col-start-5 col-end-7 row-start-1 row-end-5 flex flex-col rounded-3xl border border-gray-100 p-5 shadow"
	>
		<h2 class="text-2xl font-bold">5-Day Forecast</h2>
		<ul class="weather-forecast-list flex h-full flex-col gap-3 overflow-auto">
			{#await weatherForecast then forecasts}
				{#each forecasts as forecast}
					<ForecastTile {forecast}></ForecastTile>
				{/each}
			{/await}
		</ul>
	</section>
	<div
		class="col-start-5 col-end-7 row-span-2 row-start-5 rounded-3xl border border-gray-100 p-5 shadow"
	>
		{#await airQuality then quality}
			<AirQuality airQuality={quality}></AirQuality>
		{/await}
	</div>
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

	.weather-forecast-list {
		scrollbar-width: thin;
		scrollbar-color: var(--color-gray-400) var(--color-gray-200);
	}
</style>
