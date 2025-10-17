import { getWeatherState } from './weather';
import type { WeatherRecord, Main, WeatherForecast } from '../types/Weather';

const forecasts = [
	{
		cod: '200',
		message: 0,
		cnt: 40,
		list: [
			{
				dt: 1760518800,
				main: {
					temp: 283.67,
					feels_like: 283.18,
					temp_min: 283.67,
					temp_max: 285,
					pressure: 1022,
					sea_level: 1022,
					grnd_level: 1022,
					humidity: 92,
					temp_kf: -1.33
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d'
					}
				],
				clouds: {
					all: 2
				},
				wind: {
					speed: 8.65,
					deg: 58,
					gust: 11.8
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-15 09:00:00'
			},
			{
				dt: 1760529600,
				main: {
					temp: 284.92,
					feels_like: 284.27,
					temp_min: 284.92,
					temp_max: 287.43,
					pressure: 1022,
					sea_level: 1022,
					grnd_level: 1021,
					humidity: 81,
					temp_kf: -2.51
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d'
					}
				],
				clouds: {
					all: 3
				},
				wind: {
					speed: 8.05,
					deg: 57,
					gust: 9.82
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-15 12:00:00'
			},
			{
				dt: 1760540400,
				main: {
					temp: 292.54,
					feels_like: 292.1,
					temp_min: 292.54,
					temp_max: 296.98,
					pressure: 1020,
					sea_level: 1020,
					grnd_level: 1019,
					humidity: 60,
					temp_kf: -4.44
				},
				weather: [
					{
						id: 801,
						main: 'Clouds',
						description: 'few clouds',
						icon: '02d'
					}
				],
				clouds: {
					all: 21
				},
				wind: {
					speed: 7.9,
					deg: 57,
					gust: 9.88
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-15 15:00:00'
			},
			{
				dt: 1760551200,
				main: {
					temp: 297.16,
					feels_like: 297.08,
					temp_min: 297.16,
					temp_max: 297.16,
					pressure: 1020,
					sea_level: 1020,
					grnd_level: 1020,
					humidity: 56,
					temp_kf: 0
				},
				weather: [
					{
						id: 801,
						main: 'Clouds',
						description: 'few clouds',
						icon: '02n'
					}
				],
				clouds: {
					all: 15
				},
				wind: {
					speed: 5.99,
					deg: 50,
					gust: 11.53
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-15 18:00:00'
			},
			{
				dt: 1760562000,
				main: {
					temp: 293.3,
					feels_like: 293.09,
					temp_min: 293.3,
					temp_max: 293.3,
					pressure: 1021,
					sea_level: 1021,
					grnd_level: 1020,
					humidity: 66,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 1
				},
				wind: {
					speed: 7,
					deg: 48,
					gust: 13.63
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-15 21:00:00'
			},
			{
				dt: 1760572800,
				main: {
					temp: 288.13,
					feels_like: 287.54,
					temp_min: 288.13,
					temp_max: 288.13,
					pressure: 1020,
					sea_level: 1020,
					grnd_level: 1020,
					humidity: 71,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 1
				},
				wind: {
					speed: 7.45,
					deg: 54,
					gust: 12.97
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-16 00:00:00'
			},
			{
				dt: 1760583600,
				main: {
					temp: 285.46,
					feels_like: 284.78,
					temp_min: 285.46,
					temp_max: 285.46,
					pressure: 1020,
					sea_level: 1020,
					grnd_level: 1019,
					humidity: 78,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 7.29,
					deg: 54,
					gust: 12.21
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-16 03:00:00'
			},
			{
				dt: 1760594400,
				main: {
					temp: 284.43,
					feels_like: 283.78,
					temp_min: 284.43,
					temp_max: 284.43,
					pressure: 1019,
					sea_level: 1019,
					grnd_level: 1019,
					humidity: 83,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 6.93,
					deg: 56,
					gust: 12.23
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-16 06:00:00'
			},
			{
				dt: 1760605200,
				main: {
					temp: 287.28,
					feels_like: 286.55,
					temp_min: 287.28,
					temp_max: 287.28,
					pressure: 1020,
					sea_level: 1020,
					grnd_level: 1020,
					humidity: 69,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d'
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 7.6,
					deg: 66,
					gust: 10.38
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-16 09:00:00'
			},
			{
				dt: 1760616000,
				main: {
					temp: 292.42,
					feels_like: 291.71,
					temp_min: 292.42,
					temp_max: 292.42,
					pressure: 1019,
					sea_level: 1019,
					grnd_level: 1019,
					humidity: 50,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d'
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 6.59,
					deg: 69,
					gust: 8.27
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-16 12:00:00'
			},
			{
				dt: 1760626800,
				main: {
					temp: 293.76,
					feels_like: 293.05,
					temp_min: 293.76,
					temp_max: 293.76,
					pressure: 1018,
					sea_level: 1018,
					grnd_level: 1017,
					humidity: 45,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d'
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 6.35,
					deg: 63,
					gust: 7.65
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-16 15:00:00'
			},
			{
				dt: 1760637600,
				main: {
					temp: 290.46,
					feels_like: 289.68,
					temp_min: 290.46,
					temp_max: 290.46,
					pressure: 1018,
					sea_level: 1018,
					grnd_level: 1018,
					humidity: 55,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 5.76,
					deg: 56,
					gust: 11.27
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-16 18:00:00'
			},
			{
				dt: 1760648400,
				main: {
					temp: 287.89,
					feels_like: 286.91,
					temp_min: 287.89,
					temp_max: 287.89,
					pressure: 1019,
					sea_level: 1019,
					grnd_level: 1019,
					humidity: 57,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 6.33,
					deg: 60,
					gust: 12.79
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-16 21:00:00'
			},
			{
				dt: 1760659200,
				main: {
					temp: 286.27,
					feels_like: 285.33,
					temp_min: 286.27,
					temp_max: 286.27,
					pressure: 1019,
					sea_level: 1019,
					grnd_level: 1019,
					humidity: 65,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 6.78,
					deg: 64,
					gust: 12.09
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-17 00:00:00'
			},
			{
				dt: 1760670000,
				main: {
					temp: 284.64,
					feels_like: 283.83,
					temp_min: 284.64,
					temp_max: 284.64,
					pressure: 1018,
					sea_level: 1018,
					grnd_level: 1018,
					humidity: 76,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 6.62,
					deg: 65,
					gust: 11.13
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-17 03:00:00'
			},
			{
				dt: 1760680800,
				main: {
					temp: 283.7,
					feels_like: 282.98,
					temp_min: 283.7,
					temp_max: 283.7,
					pressure: 1018,
					sea_level: 1018,
					grnd_level: 1018,
					humidity: 83,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 6.6,
					deg: 61,
					gust: 11.43
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-17 06:00:00'
			},
			{
				dt: 1760691600,
				main: {
					temp: 286.8,
					feels_like: 285.97,
					temp_min: 286.8,
					temp_max: 286.8,
					pressure: 1019,
					sea_level: 1019,
					grnd_level: 1019,
					humidity: 67,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d'
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 7.42,
					deg: 68,
					gust: 9.73
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-17 09:00:00'
			},
			{
				dt: 1760702400,
				main: {
					temp: 292.18,
					feels_like: 291.34,
					temp_min: 292.18,
					temp_max: 292.18,
					pressure: 1019,
					sea_level: 1019,
					grnd_level: 1018,
					humidity: 46,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d'
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 6.39,
					deg: 72,
					gust: 8.03
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-17 12:00:00'
			},
			{
				dt: 1760713200,
				main: {
					temp: 293.75,
					feels_like: 292.96,
					temp_min: 293.75,
					temp_max: 293.75,
					pressure: 1017,
					sea_level: 1017,
					grnd_level: 1017,
					humidity: 42,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d'
					}
				],
				clouds: {
					all: 1
				},
				wind: {
					speed: 5.7,
					deg: 68,
					gust: 6.63
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-17 15:00:00'
			},
			{
				dt: 1760724000,
				main: {
					temp: 290.1,
					feels_like: 289.23,
					temp_min: 290.1,
					temp_max: 290.1,
					pressure: 1019,
					sea_level: 1019,
					grnd_level: 1018,
					humidity: 53,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 3
				},
				wind: {
					speed: 5.46,
					deg: 55,
					gust: 10.61
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-17 18:00:00'
			},
			{
				dt: 1760734800,
				main: {
					temp: 287.28,
					feels_like: 286.32,
					temp_min: 287.28,
					temp_max: 287.28,
					pressure: 1019,
					sea_level: 1019,
					grnd_level: 1019,
					humidity: 60,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 2
				},
				wind: {
					speed: 6.12,
					deg: 64,
					gust: 12.36
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-17 21:00:00'
			},
			{
				dt: 1760745600,
				main: {
					temp: 285.8,
					feels_like: 284.87,
					temp_min: 285.8,
					temp_max: 285.8,
					pressure: 1020,
					sea_level: 1020,
					grnd_level: 1019,
					humidity: 67,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 1
				},
				wind: {
					speed: 6.24,
					deg: 72,
					gust: 10.72
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-18 00:00:00'
			},
			{
				dt: 1760756400,
				main: {
					temp: 284.44,
					feels_like: 283.61,
					temp_min: 284.44,
					temp_max: 284.44,
					pressure: 1019,
					sea_level: 1019,
					grnd_level: 1019,
					humidity: 76,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 6
				},
				wind: {
					speed: 6.1,
					deg: 78,
					gust: 9.74
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-18 03:00:00'
			},
			{
				dt: 1760767200,
				main: {
					temp: 283.47,
					feels_like: 282.7,
					temp_min: 283.47,
					temp_max: 283.47,
					pressure: 1019,
					sea_level: 1019,
					grnd_level: 1019,
					humidity: 82,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n'
					}
				],
				clouds: {
					all: 10
				},
				wind: {
					speed: 6.09,
					deg: 77,
					gust: 8.92
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-18 06:00:00'
			},
			{
				dt: 1760778000,
				main: {
					temp: 286.77,
					feels_like: 285.86,
					temp_min: 286.77,
					temp_max: 286.77,
					pressure: 1020,
					sea_level: 1020,
					grnd_level: 1019,
					humidity: 64,
					temp_kf: 0
				},
				weather: [
					{
						id: 803,
						main: 'Clouds',
						description: 'broken clouds',
						icon: '04d'
					}
				],
				clouds: {
					all: 68
				},
				wind: {
					speed: 5.34,
					deg: 87,
					gust: 5.97
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-18 09:00:00'
			},
			{
				dt: 1760788800,
				main: {
					temp: 292.51,
					feels_like: 291.81,
					temp_min: 292.51,
					temp_max: 292.51,
					pressure: 1019,
					sea_level: 1019,
					grnd_level: 1019,
					humidity: 50,
					temp_kf: 0
				},
				weather: [
					{
						id: 803,
						main: 'Clouds',
						description: 'broken clouds',
						icon: '04d'
					}
				],
				clouds: {
					all: 68
				},
				wind: {
					speed: 1.88,
					deg: 96,
					gust: 2.13
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-18 12:00:00'
			},
			{
				dt: 1760799600,
				main: {
					temp: 293.83,
					feels_like: 293.1,
					temp_min: 293.83,
					temp_max: 293.83,
					pressure: 1017,
					sea_level: 1017,
					grnd_level: 1017,
					humidity: 44,
					temp_kf: 0
				},
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d'
					}
				],
				clouds: {
					all: 8
				},
				wind: {
					speed: 0.97,
					deg: 288,
					gust: 1.54
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-18 15:00:00'
			},
			{
				dt: 1760810400,
				main: {
					temp: 291.24,
					feels_like: 290.38,
					temp_min: 291.24,
					temp_max: 291.24,
					pressure: 1017,
					sea_level: 1017,
					grnd_level: 1016,
					humidity: 49,
					temp_kf: 0
				},
				weather: [
					{
						id: 802,
						main: 'Clouds',
						description: 'scattered clouds',
						icon: '03n'
					}
				],
				clouds: {
					all: 27
				},
				wind: {
					speed: 1.71,
					deg: 55,
					gust: 2.04
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-18 18:00:00'
			},
			{
				dt: 1760821200,
				main: {
					temp: 289.45,
					feels_like: 288.49,
					temp_min: 289.45,
					temp_max: 289.45,
					pressure: 1016,
					sea_level: 1016,
					grnd_level: 1016,
					humidity: 52,
					temp_kf: 0
				},
				weather: [
					{
						id: 804,
						main: 'Clouds',
						description: 'overcast clouds',
						icon: '04n'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 4.07,
					deg: 101,
					gust: 5.03
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-18 21:00:00'
			},
			{
				dt: 1760832000,
				main: {
					temp: 288.45,
					feels_like: 287.5,
					temp_min: 288.45,
					temp_max: 288.45,
					pressure: 1015,
					sea_level: 1015,
					grnd_level: 1015,
					humidity: 56,
					temp_kf: 0
				},
				weather: [
					{
						id: 804,
						main: 'Clouds',
						description: 'overcast clouds',
						icon: '04n'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 4.72,
					deg: 126,
					gust: 6.65
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-19 00:00:00'
			},
			{
				dt: 1760842800,
				main: {
					temp: 287.83,
					feels_like: 286.95,
					temp_min: 287.83,
					temp_max: 287.83,
					pressure: 1014,
					sea_level: 1014,
					grnd_level: 1014,
					humidity: 61,
					temp_kf: 0
				},
				weather: [
					{
						id: 804,
						main: 'Clouds',
						description: 'overcast clouds',
						icon: '04n'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 5.42,
					deg: 129,
					gust: 10.14
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-19 03:00:00'
			},
			{
				dt: 1760853600,
				main: {
					temp: 287.14,
					feels_like: 286.66,
					temp_min: 287.14,
					temp_max: 287.14,
					pressure: 1013,
					sea_level: 1013,
					grnd_level: 1012,
					humidity: 79,
					temp_kf: 0
				},
				weather: [
					{
						id: 804,
						main: 'Clouds',
						description: 'overcast clouds',
						icon: '04n'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 7.84,
					deg: 136,
					gust: 13.46
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-19 06:00:00'
			},
			{
				dt: 1760864400,
				main: {
					temp: 289.28,
					feels_like: 288.88,
					temp_min: 289.28,
					temp_max: 289.28,
					pressure: 1012,
					sea_level: 1012,
					grnd_level: 1012,
					humidity: 74,
					temp_kf: 0
				},
				weather: [
					{
						id: 804,
						main: 'Clouds',
						description: 'overcast clouds',
						icon: '04d'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 8.81,
					deg: 156,
					gust: 13.47
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-19 09:00:00'
			},
			{
				dt: 1760875200,
				main: {
					temp: 293.21,
					feels_like: 292.84,
					temp_min: 293.21,
					temp_max: 293.21,
					pressure: 1011,
					sea_level: 1011,
					grnd_level: 1010,
					humidity: 60,
					temp_kf: 0
				},
				weather: [
					{
						id: 804,
						main: 'Clouds',
						description: 'overcast clouds',
						icon: '04d'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 7.74,
					deg: 187,
					gust: 12.09
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-19 12:00:00'
			},
			{
				dt: 1760886000,
				main: {
					temp: 291.51,
					feels_like: 291.62,
					temp_min: 291.51,
					temp_max: 291.51,
					pressure: 1009,
					sea_level: 1009,
					grnd_level: 1009,
					humidity: 85,
					temp_kf: 0
				},
				weather: [
					{
						id: 804,
						main: 'Clouds',
						description: 'overcast clouds',
						icon: '04d'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 7.19,
					deg: 207,
					gust: 9.3
				},
				visibility: 10000,
				pop: 0,
				sys: {
					pod: 'd'
				},
				dt_txt: '2025-10-19 15:00:00'
			},
			{
				dt: 1760896800,
				main: {
					temp: 290.31,
					feels_like: 290.46,
					temp_min: 290.31,
					temp_max: 290.31,
					pressure: 1009,
					sea_level: 1009,
					grnd_level: 1009,
					humidity: 91,
					temp_kf: 0
				},
				weather: [
					{
						id: 500,
						main: 'Rain',
						description: 'light rain',
						icon: '10n'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 2.25,
					deg: 254,
					gust: 1.94
				},
				visibility: 10000,
				pop: 1,
				rain: {
					'3h': 0.93
				},
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-19 18:00:00'
			},
			{
				dt: 1760907600,
				main: {
					temp: 289.7,
					feels_like: 289.84,
					temp_min: 289.7,
					temp_max: 289.7,
					pressure: 1008,
					sea_level: 1008,
					grnd_level: 1008,
					humidity: 93,
					temp_kf: 0
				},
				weather: [
					{
						id: 500,
						main: 'Rain',
						description: 'light rain',
						icon: '10n'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 8.38,
					deg: 211,
					gust: 12.33
				},
				visibility: 10000,
				pop: 1,
				rain: {
					'3h': 1.76
				},
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-19 21:00:00'
			},
			{
				dt: 1760918400,
				main: {
					temp: 289.81,
					feels_like: 289.8,
					temp_min: 289.81,
					temp_max: 289.81,
					pressure: 1008,
					sea_level: 1008,
					grnd_level: 1007,
					humidity: 87,
					temp_kf: 0
				},
				weather: [
					{
						id: 500,
						main: 'Rain',
						description: 'light rain',
						icon: '10n'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 6.08,
					deg: 249,
					gust: 7.9
				},
				visibility: 10000,
				pop: 1,
				rain: {
					'3h': 1.38
				},
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-20 00:00:00'
			},
			{
				dt: 1760929200,
				main: {
					temp: 289.08,
					feels_like: 289.1,
					temp_min: 289.08,
					temp_max: 289.08,
					pressure: 1007,
					sea_level: 1007,
					grnd_level: 1006,
					humidity: 91,
					temp_kf: 0
				},
				weather: [
					{
						id: 501,
						main: 'Rain',
						description: 'moderate rain',
						icon: '10n'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 7.79,
					deg: 224,
					gust: 10.29
				},
				visibility: 10000,
				pop: 1,
				rain: {
					'3h': 6.06
				},
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-20 03:00:00'
			},
			{
				dt: 1760940000,
				main: {
					temp: 289.32,
					feels_like: 289.21,
					temp_min: 289.32,
					temp_max: 289.32,
					pressure: 1006,
					sea_level: 1006,
					grnd_level: 1005,
					humidity: 85,
					temp_kf: 0
				},
				weather: [
					{
						id: 804,
						main: 'Clouds',
						description: 'overcast clouds',
						icon: '04n'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 6.72,
					deg: 228,
					gust: 8.77
				},
				visibility: 10000,
				pop: 0.8,
				sys: {
					pod: 'n'
				},
				dt_txt: '2025-10-20 06:00:00'
			}
		],
		city: {
			id: 3009052,
			name: 'Lagord',
			coord: {
				lat: 46.185,
				lon: -1.1352
			},
			country: 'FR',
			population: 6987,
			timezone: 7200,
			sunrise: 1760509285,
			sunset: 1760548731
		}
	}
];

let dailyForecasts: Array<WeatherForecast> = [];

function computeDailyForecasts() {
	let weather = forecasts[Math.round(Math.random() * (forecasts.length - 1))];
	weather = structuredClone(weather);

	const group = Object.groupBy(weather.list, (forecast) => {
		const forecastDt = new Date(forecast.dt * 1000);
		forecastDt.setHours(0);
		return forecastDt.toISOString();
	});

	const result = [];
	for (const groudDt in group) {
		const forecasts = group[groudDt];
		if (!forecasts) continue;
		const parsed: Array<WeatherRecord> = forecasts.map((forecast) => {
			return {
				...forecast,
				dt: new Date(forecast.dt * 1000),
				weather: [{ ...forecast.weather[0], state: getWeatherState(forecast.weather[0].id) }]
			} as unknown as WeatherRecord;
		});
		result.push({
			dt: groudDt,
			forecast: parsed,
			daily: dailyAverage(parsed),
			id: crypto.randomUUID() // To change later
		} as unknown as WeatherForecast);
	}
	dailyForecasts = result;
}
computeDailyForecasts();

function dailyAverage(fcsts: Array<WeatherRecord>) {
	const initialSum: Main = {
		temp: 0,
		feels_like: 0,
		temp_min: 0,
		temp_max: 0,
		pressure: 0,
		sea_level: 0,
		grnd_level: 0,
		humidity: 0,
		temp_kf: 0
	};

	if (fcsts.length === 0) {
		return initialSum; // Return zeros if the array is empty
	}

	const totalSums = fcsts.reduce((accumulator, currentRecord) => {
		// Iterate over the keys of the 'main' object
		(Object.keys(accumulator) as Array<keyof Main>).forEach((key) => {
			if (typeof accumulator[key] !== 'number') return;
			// Add the current record's value to the accumulated sum
			accumulator[key] += currentRecord?.main[key];
		});
		return accumulator;
	}, initialSum);

	const averages = Object.fromEntries(
		Object.entries(totalSums).map(([key, value]) => [key, value / fcsts.length])
	);

	const states = fcsts.map((fcst) => fcst.weather[0].id);
	const dailyState = Array.from(new Set(states)).reduce((prev, curr) =>
		states.filter((state) => state === curr).length >
		states.filter((state) => state === prev).length
			? curr
			: prev
	);

	return {
		...averages,
		state: getWeatherState(dailyState)
	} as unknown as Main;
}

export async function getWeatherForecast(): Promise<Array<WeatherForecast>> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(dailyForecasts);
		}, Math.random() * 500);
	});
}

export function getWeatherForecastById(id: string): Promise<WeatherForecast | undefined> {
	return new Promise((resolve) => {
		const dailyForecast = dailyForecasts.find((dailyForecast) => dailyForecast.id === id);
		setTimeout(() => {
			resolve(dailyForecast);
		}, Math.random() * 500);
	});
}
