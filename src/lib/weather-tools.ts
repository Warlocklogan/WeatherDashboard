export function kelvinToCelsius(temp: number) {
	return temp - 273.15;
}

export function celsiusToKelvin(temp: number) {
	return temp + 273.15;
}

export function kelvinToHumanCelsius(temp: number) {
	return Math.round(kelvinToCelsius(temp));
}
