<script lang="ts">
	import WeatherIcon from './weather-icon.svelte';
	import type { WeatherRecord } from '../types/Weather';
	import { kelvinToHumanCelsius } from '$lib/weather-tools';

	const { forecast }: { forecast: WeatherRecord } = $props();

	const DatetimeFormater = new Intl.DateTimeFormat('en-US', {
		dateStyle: undefined,
		timeStyle: 'short'
	});
</script>

<li
	class="hourly-forecast-tile grid grow grid-cols-1 grid-rows-2 rounded-3xl border border-gray-200 shadow"
>
	<div class="rounded-t-3xl bg-blue-200">
		<WeatherIcon weather={forecast.weather[0].state}></WeatherIcon>
	</div>
	<p class="flex flex-col items-center justify-center gap-1.5">
		<span>{DatetimeFormater.format(new Date(forecast.dt))}</span>
		<span>{kelvinToHumanCelsius(forecast.main.temp)}°c </span>
	</p>
</li>
