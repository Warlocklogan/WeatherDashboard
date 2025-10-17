<script lang="ts">
	import HourlyForecastTile from '$lib/components/hourly-forecast-tile.svelte';
	import WeatherIcon from '$lib/components/weather-icon.svelte';
	import { kelvinToHumanCelsius } from '$lib/weather-tools';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const DatetimeFormater = new Intl.DateTimeFormat('en-US', {
		dateStyle: 'full'
	});
</script>

<div class="flex h-full flex-col gap-y-3 p-5">
	<div
		class="flex-3 rounded-3xl border border-x-blue-100 border-t-blue-100 border-b-white bg-gradient-to-b from-blue-300 to-white"
	>
		<h2 class="text-xl">{DatetimeFormater.format(new Date(data.forecast.dt))}</h2>
		<div class="flex h-full max-h-full">
			<span class=" text-7xl font-extrabold"
				>{kelvinToHumanCelsius(data.forecast.daily.temp)}°c</span
			>
			<WeatherIcon weather={data.forecast.daily.state}></WeatherIcon>
		</div>
	</div>
	<ul class="grid grid-cols-8 gap-x-3">
		{#each data.forecast.forecast as forecast}
			<HourlyForecastTile {forecast}></HourlyForecastTile>
		{/each}
	</ul>
</div>
