const currentWeather = {
	coord: { lon: -1.15, lat: 46.1667 },
	weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
	base: 'stations',
	main: {
		temp: 12.85,
		feels_like: 11.85,
		temp_min: 10.85,
		temp_max: 12.85,
		pressure: 1021,
		humidity: 82,
		sea_level: 1021,
		grnd_level: 1021
	},
	visibility: 10000,
	wind: { speed: 8.23, deg: 70 },
	clouds: { all: 100 },
	dt: 1760431367,
	sys: { type: 1, id: 6458, country: 'FR', sunrise: 1760422805, sunset: 1760462444 },
	timezone: 7200,
	id: 3006787,
	name: 'La Rochelle',
	cod: 200,
	rain: { '1h': 1.2 }
};

function getWeatherState(weatherCode: number) {
	if (weatherCode === 221) {
		return 'severeThunderstorm';
	}
	if (weatherCode >= 200 && weatherCode < 300) {
		return 'thunderstorms';
	}
	if (weatherCode >= 300 && weatherCode < 400) {
		return 'drizzle';
	}
	if (weatherCode >= 500 && weatherCode < 600) {
		return 'rainy';
	}
	if (weatherCode >= 600 && weatherCode < 700) {
		return 'snowny';
	}
	if (weatherCode === 701 || weatherCode === 711 || weatherCode === 741) {
		return 'fog';
	}
	if (weatherCode === 721) {
		return 'haze';
	}
	if (weatherCode === 731 || weatherCode === 751 || weatherCode === 761 || weatherCode === 762) {
		return 'dust';
	}
	if (weatherCode === 771) {
		return 'wind';
	}
	if (weatherCode === 781) {
		return 'tornado';
	}
	if (weatherCode === 800) {
		return 'clear';
	}
	if (weatherCode >= 801 && weatherCode < 900) {
		return 'cloudy';
	}
}

export async function getCurrentWeather() {
	return new Promise((resolve) => {
		setTimeout(() => {
			const current = structuredClone(currentWeather);
			const currentState = getWeatherState(current.weather[0].id);
			current.weather[0]['state'] = currentState;
			resolve(current);
		}, Math.random() * 500);
	});
}
