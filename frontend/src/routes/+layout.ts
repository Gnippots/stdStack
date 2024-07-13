/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export const trailingSlash = 'always';

export async function load({ fetch, url }) {
	const directus = getDirectusInstance(fetch);
    const global = await directus.request(readItems('global'));

	return {
        global,
	};
}
