<script lang="ts">
	import type { AirQualityList } from '../types/Weather';

	const { airQuality }: { airQuality: AirQualityList } = $props();
</script>

<svg width="250" height="150" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
	<g transform="translate(0, 100) rotate(-90)">
		<path
			d="M 10 10 A 90 90 0 0 1 100 10"
			fill="none"
			stroke="#00CCFF"
			stroke-width="20"
			stroke-dasharray="31.42 125.66"
		/>
	</g>

	<g transform="translate(100, 100) rotate(-90)">
		<line
			x1="0"
			y1="0"
			x2="0"
			y2="-80"
			stroke="#000000"
			stroke-width="3"
			id="aqi-pointer"
			transform="rotate(DYNAMIC_ANGLE)"
		/>
		<circle cx="0" cy="0" r="5" fill="#000000" />
	</g>

	<text x="100" y="80" text-anchor="middle" font-size="14" fill="#000000" font-weight="bold">
		Medium {airQuality.main.aqi}
	</text>
</svg>
