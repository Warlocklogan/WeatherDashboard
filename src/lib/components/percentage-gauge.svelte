<script lang="ts">
	let { progress, radius = 45 } = $props();
	const circonference = $derived(2 * Math.PI * radius);
	const dashOffset = $derived(circonference * (1 - progress / 100));
</script>

<div class="percentage-gauge">
	<svg viewBox="0 -100 100 100" class="gauge-svg">
		<circle cx="50" cy="50" r={radius} class="gauge-track"></circle>
		<circle
			cx="50"
			cy="50"
			r={radius}
			class="gauge-progress"
			stroke-dasharray={circonference}
			stroke-dashoffset={dashOffset}
		></circle>
		<text x="50" y="-45" class="gauge-text">{Math.round(progress)}%</text>
	</svg>
</div>

<style>
	.percentage-gauge {
		width: 100%;
		max-height: 80%;
		display: flex;
		justify-content: center;
	}
	.gauge-svg {
		overflow: visible; /* Important for the stroke to show up correctly */
		height: 100%;
	}

	.gauge-track {
		transform: rotate(-90deg);
		fill: none;
		stroke: #e0e0e0; /* Light gray background */
		stroke-width: 8;
	}

	.gauge-progress {
		transform: rotate(-90deg);
		fill: none;
		stroke: #007bff; /* Blue for humidity */
		stroke-width: 8;
		/* Transition for smooth updates */
		transition: stroke-dashoffset 0.5s ease-out;
	}

	.gauge-text {
		text-anchor: middle;
		fill: #333;
		font-size: 20px;
		font-weight: bold;
	}
</style>
