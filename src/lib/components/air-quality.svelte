<script lang="ts">
	import type { AirQualityList } from '../types/Weather';

	const { airQuality }: { airQuality: AirQualityList } = $props();

	const segmentLength = 70.5;
</script>

<svg height="250" width="250" viewBox="0 0 250 250">
	{#if airQuality.main.aqi >= 1}
		<path
			d="
      M 12.5 125
      A 100 100 0 0 1 237.5 125"
			fill="none"
			stroke="#00CCFF"
			stroke-width="15"
			stroke-dasharray="{segmentLength} 400"
		/>
	{/if}
	{#if airQuality.main.aqi >= 2}
		<path
			d="
      M 12.5 125
      A 100 100 0 0 1 237.5 125"
			fill="none"
			stroke="#00FF00"
			stroke-width="15"
			stroke-dasharray="{segmentLength} 400"
			stroke-dashoffset={-segmentLength}
		/>
	{/if}
	{#if airQuality.main.aqi >= 3}
		<path
			d="
      M 12.5 125
      A 100 100 0 0 1 237.5 125"
			fill="none"
			stroke="#FFFF00"
			stroke-width="15"
			stroke-dasharray="{segmentLength} 400"
			stroke-dashoffset={-segmentLength * 2}
		/>
	{/if}
	{#if airQuality.main.aqi >= 4}
		<path
			d="
      M 12.5 125
      A 100 100 0 0 1 237.5 125"
			fill="none"
			stroke="#FF6600"
			stroke-width="15"
			stroke-dasharray="{segmentLength} 400"
			stroke-dashoffset={-segmentLength * 3}
		/>
	{/if}
	{#if airQuality.main.aqi >= 5}
		<path
			d="
      M 12.5 125
      A 100 100 0 0 1 237.5 125"
			fill="none"
			stroke="#FF0000"
			stroke-width="15"
			stroke-dasharray="{segmentLength} 400"
			stroke-dashoffset={-segmentLength * 4}
		/>
	{/if}

	<!-- <g transform="translate(125, 125) rotate(-90)">
		<line
			x1="0"
			y1="0"
			x2="0"
			y2="-80"
			stroke="#000000"
			stroke-width="3"
			id="aqi-pointer"
			transform="rotate(160)"
		/>
		<circle cx="0" cy="0" r="5" fill="#000000" />
	</g> -->

	<text x="125" y="100" text-anchor="middle" font-size="16" fill="#000000" font-weight="bold">
		Medium
	</text>
</svg>
