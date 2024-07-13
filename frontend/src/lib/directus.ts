import { createDirectus, rest } from '@directus/sdk';
import { PUBLIC_APIURL } from '$env/static/public';

console.log("____")
console.log(PUBLIC_APIURL)

function getDirectusInstance(fetch) {
  	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(PUBLIC_APIURL, options ).with(rest());
	return directus;
}

export function getImageSrc(id: string): string {
	return `${PUBLIC_APIURL}assets/${id}`
}

export default getDirectusInstance;
