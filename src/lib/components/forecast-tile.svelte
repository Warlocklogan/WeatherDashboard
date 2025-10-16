<script lang="ts">
	import WeatherIcon from './weather-icon.svelte';
	import type { WeatherForecast } from '../types/Weather';
	import { kelvinToHumanCelsius } from '$lib/weather-tools';

	const { forecast }: { forecast: WeatherForecast } = $props();
	console.log('forecast', forecast);

	const DatetimeFormater = new Intl.DateTimeFormat('en-US', {
		dateStyle: 'long',
		timeStyle: undefined
	});
</script>

<li
	class="forecast-tile grid max-h-44 min-h-40 grid-cols-2 grid-rows-1 rounded-2xl border border-gray-200 shadow"
>
	<div>
		<WeatherIcon weather={forecast.daily.state}></WeatherIcon>
	</div>
	<p class="flex flex-col justify-center gap-1.5">
		<span>{DatetimeFormater.format(new Date(forecast.dt))}</span>
		<span
			>{kelvinToHumanCelsius(forecast.daily.temp)}°c | Feels like {kelvinToHumanCelsius(
				forecast.daily.feels_like
			)}°c
		</span>
	</p>
</li>

<style>
	.forecast-tile {
		border: 1px solid --var(--color-gray-400);
	}
</style>
