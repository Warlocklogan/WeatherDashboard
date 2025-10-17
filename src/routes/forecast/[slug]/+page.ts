import { getWeatherForecastById } from '$lib/mockData/forecast';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ params }) => {
	const forecast = await getWeatherForecastById(params.slug);
	if (forecast) {
		return {
			forecast: forecast
		};
	}
	return redirect(308, '/');
}) satisfies PageLoad;
