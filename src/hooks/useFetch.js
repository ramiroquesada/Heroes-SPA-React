
export const getHeroesFetch = async () => {
	const headersList = {
		Accept: '*/*',
		'User-Agent': navigator.userAgent,
	};

	if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
		headersList['User-Agent'] = 'iOS device';
	}

	const response = await fetch(
		'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json',
		{
			method: 'GET',
			headers: headersList,
		}
	);

	const data = await response.json();

	

	return data;
};
