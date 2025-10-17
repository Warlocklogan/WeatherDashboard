<script lang="ts">
	import WeatherIcon from './weather-icon.svelte';
	import type { WeatherForecast } from '../types/Weather';
	import { kelvinToHumanCelsius } from '$lib/weather-tools';

	const { forecast }: { forecast: WeatherForecast } = $props();

	const DatetimeFormater = new Intl.DateTimeFormat('en-US', {
		dateStyle: 'long',
		timeStyle: undefined
	});
</script>

<li class="forecast-tile max-h-44 min-h-40 rounded-2xl border border-gray-200 shadow">
	<a href="/forecast/{forecast.id}" class="grid h-full grid-cols-2 grid-rows-1">
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
	</a>
</li>

<style>
	.forecast-tile {
		border: 1px solid --var(--color-gray-400);
	}
</style>
