import type { AirQuality, AirQualityList } from '$lib/types/Weather';

const airQuality: AirQuality = {
	coord: [50, 50],
	list: [
		{
			dt: 1605182400,
			main: {
				aqi: 1
			},
			components: {
				co: 201.94053649902344,
				no: 0.01877197064459324,
				no2: 0.7711350917816162,
				o3: 68.66455078125,
				so2: 0.6407499313354492,
				pm2_5: 0.5,
				pm10: 0.540438711643219,
				nh3: 0.12369127571582794
			}
		}
	]
};

const airQualityEuropeanIndex = new Map([
	[
		'no2',
		[
			[0, 50],
			[50, 100],
			[100, 200],
			[200, 400],
			[400, Infinity]
		]
	],
	[
		'pm10',
		[
			[0, 25],
			[25, 50],
			[50, 90],
			[90, 180],
			[180, Infinity]
		]
	],
	[
		'o3',
		[
			[0, 60],
			[60, 120],
			[120, 180],
			[180, 240],
			[240, Infinity]
		]
	],
	[
		'pm2_5',
		[
			[0, 15],
			[15, 30],
			[30, 55],
			[55, 110],
			[110, Infinity]
		]
	]
]);

function computeEuropeanAirQuality(airQuality: AirQuality) {
	const subIndices: Array<number> = [];
	for (const [key, value] of Object.entries(airQuality.list[0].components)) {
		if (!airQualityEuropeanIndex.has(key)) continue;
		const subIndice = airQualityEuropeanIndex
			.get(key)
			?.findIndex(([min, max]) => min <= value && value <= max);
		if (!subIndice) continue;
		subIndices.push(subIndice + 1);
	}
	return Math.max(...subIndices);
}

export async function getCurrentAirQuality(): Promise<AirQualityList> {
	return new Promise((resolve) => {
		setTimeout(() => {
			const airQualityIndex = computeEuropeanAirQuality(airQuality);
			const localAirQuality = structuredClone(airQuality);
			localAirQuality.list[0].main.aqi = airQualityIndex;
			resolve(localAirQuality.list[0]);
		}, Math.random() * 500);
	});
}
