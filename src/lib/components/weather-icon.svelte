<script lang="ts">
    import clearDay from '$lib/assets/weather-icons/clear-day.svg'
    import clearNight from '$lib/assets/weather-icons/clear-night.svg'
    import cloudy1Day from '$lib/assets/weather-icons/cloudy-1-day.svg'
    import cloudy1Night from '$lib/assets/weather-icons/cloudy-1-night.svg'
    import cloudy2Day from '$lib/assets/weather-icons/cloudy-2-day.svg'
    import cloudy2Night from '$lib/assets/weather-icons/cloudy-2-night.svg'
    import cloudy3Day from '$lib/assets/weather-icons/cloudy-3-day.svg'
    import cloudy3Night from '$lib/assets/weather-icons/cloudy-3-night.svg'
    import cloudy from '$lib/assets/weather-icons/cloudy.svg'
    import dust from '$lib/assets/weather-icons/dust.svg'
    import fogDay from '$lib/assets/weather-icons/fog-day.svg'
    import fogNight from '$lib/assets/weather-icons/fog-night.svg'
    import fog from '$lib/assets/weather-icons/fog.svg'
    import frostDay from '$lib/assets/weather-icons/frost-day.svg'
    import frostNight from '$lib/assets/weather-icons/frost-night.svg'
    import frost from '$lib/assets/weather-icons/frost.svg'
    import hail from '$lib/assets/weather-icons/hail.svg'
    import hazeDay from '$lib/assets/weather-icons/haze-day.svg' 
    import hazeNight from '$lib/assets/weather-icons/haze-night.svg' 
    import haze from '$lib/assets/weather-icons/haze.svg' 
    import hurricane from '$lib/assets/weather-icons/hurricane.svg' 
    import isolatedThunderstormsDay from '$lib/assets/weather-icons/isolated-thunderstorms-day.svg' 
    import isolatedThunderstormsNight from '$lib/assets/weather-icons/isolated-thunderstorms-night.svg' 
    import isolatedThunderstorms from '$lib/assets/weather-icons/isolated-thunderstorms.svg' 
    import rainAndSleetMix from '$lib/assets/weather-icons/rain-and-sleet-mix.svg' 
    import rainAndSnowMix from '$lib/assets/weather-icons/rain-and-snow-mix.svg' 
    import rainy1Day from '$lib/assets/weather-icons/rainy-1-day.svg' 
    import rainy1Night from '$lib/assets/weather-icons/rainy-1-night.svg'
    import rainy1 from '$lib/assets/weather-icons/rainy-1.svg' 
    import rainy2Day from '$lib/assets/weather-icons/rainy-2-day.svg' 
    import rainy2Night from '$lib/assets/weather-icons/rainy-2-night.svg' 
    import rainy2 from '$lib/assets/weather-icons/rainy-2.svg' 
    import rainy3Day from '$lib/assets/weather-icons/rainy-3-day.svg' 
    import rainy3Night from '$lib/assets/weather-icons/rainy-3-night.svg' 
    import rainy3 from '$lib/assets/weather-icons/rainy-3.svg' 
    import scatteredThunderstormsDay from '$lib/assets/weather-icons/scattered-thunderstorms-day.svg' 
    import scatteredThunderstormsNight from '$lib/assets/weather-icons/scattered-thunderstorms-night.svg' 
    import scatteredThunderstorms from '$lib/assets/weather-icons/scattered-thunderstorms.svg' 
    import severeThunderstorm from '$lib/assets/weather-icons/severe-thunderstorm.svg' 
    import snowAndSleetMix from '$lib/assets/weather-icons/snow-and-sleet-mix.svg' 
    import snowy1Day from '$lib/assets/weather-icons/snowy-1-day.svg' 
    import snowy1Night from '$lib/assets/weather-icons/snowy-1-night.svg' 
    import snowy1 from '$lib/assets/weather-icons/snowy-1.svg' 
    import snowy2Day from '$lib/assets/weather-icons/snowy-2-day.svg' 
    import snowy2Night from '$lib/assets/weather-icons/snowy-2-night.svg' 
    import snowy2 from '$lib/assets/weather-icons/snowy-2.svg' 
    import snowy3Day from '$lib/assets/weather-icons/snowy-3-day.svg' 
    import snowy3Night from '$lib/assets/weather-icons/snowy-3-night.svg' 
    import snowy3 from '$lib/assets/weather-icons/snowy-3.svg' 
    import thunderstorms from '$lib/assets/weather-icons/thunderstorms.svg' 
    import tornado from '$lib/assets/weather-icons/tornado.svg' 
    import tropicalStorm from '$lib/assets/weather-icons/tropical-storm.svg' 
    import wind from '$lib/assets/weather-icons/wind.svg'

    let { weather } = $props();

    
    let icon = $state(clearDay);
    switch (weather) {
        case "cloudy":
            icon = cloudy;
            break;
        case "fog":
            icon = fog;
            break;
        case "rainy":
            icon = rainy1;
            break;
        case "snowny":
            icon = snowy1;
            break;
        case "wind":
            icon = wind;
            break;
        default:
            icon = clearDay;
    }

</script>

<img class="row-start-1 row-end-3 weather-icon p-5"  src={icon} alt="weather icon"/>

<style>
    .weather-icon {
        height: 100%;
    }
</style>