<script lang="ts">
	import Weather from '$lib/components/weather-icon.svelte';
    import PercentageGauge from '$lib/components/percentage-gauge.svelte';

    const demoStates = ['cloudy', 'fog', 'rainy', 'snowny', 'wind', 'clear'];
    const state = demoStates[Math.floor(Math.random() * demoStates.length)];

</script>

<div class="h-full grid grid-cols-6 grid-rows-6">
    <div class="bg-blue-200 col-start-1 col-end-4 row-start-1 row-end-7 m-5 rounded-3xl border border-blue-100 flex">
        <div class="flex-1 grid auto-rows-auto">
            <Weather weather={state}></Weather>
            <h2>{Math.floor(Math.random() * 28.0)}°c Temperature / <span>feel like</span></h2>
            <div class="grid grid-cols-3 grid-rows-2 gap-3 p-5">
                <div class="row-start-1 row-end-2 card flex justify-center" >
                    <div class="flex flex-col gap-1.5">
                        <p>Humidity</p>
                        <PercentageGauge progress="45" />
                    </div>
                </div>
                <div class="row-start-1 row-end-2 card  flex justify-center">
                    <div class="flex flex-col">
                        <p>Temp Min / Temp Max</p>
                        <p>Max: 20°c</p>
                        <p>Min: 6°c</p>
                    </div>
                </div>
                <div class="row-start-1 row-end-2 card flex justify-center">Wind Speed / Deg</div>
                <div class="col-start-1 row-start-2 card flex justify-center">Cloud coverage</div>
                <div class="col-start-2 row-start-2 card flex justify-center" >Rain / Snow mm/h</div>
            </div>
            
        </div>
    </div>
    <div class="bg-amber-500 col-start-4 col-end-7 row-start-1 row-end-5">Forthcoming Forecast</div>
    <div class="bg-green-500 col-start-4 col-end-7 row-start-5 row-end-7"> Air Quality</div>
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