export interface WeatherRecords {
	cod: string;
	message: number;
	cnt: number;
	list: Array<WeatherRecord>;
	city: City;
}

export interface WeatherRecord {
	coord: Coord;
	weather: Array<Weather>;
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	clouds: Clouds;
	dt: number | Date;
	sys: Sys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
	rain?: Rain;
	snow?: Snow;
}

export interface WeatherForecast {
	dt: Date;
	forecast: Array<WeatherRecord>;
	daily: Main;
	id: string;
}

interface Coord {
	lon: number;
	lat: number;
}

interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
	state?: string;
}

export interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
	temp_kf?: number;
	state?: string;
}

interface Wind {
	speed: number;
	deg: number;
	gust?: number;
}

interface Clouds {
	all: number;
}

interface Sys {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}

interface Rain {
	'1h'?: number;
	'3h'?: number;
}

interface Snow {
	'1h'?: number;
	'3h'?: number;
}

interface City {
	id: number;
	name: string;
	coord: Coord;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
}
