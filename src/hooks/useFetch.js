
export const getHeroesFetch = async () => {
	const headersList = {
		Accept: '*/*',
		'User-Agent': navigator.userAgent,
	
	};

	if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
		headersList['User-Agent'] = 'iOS device';
	}

	const response = await fetch(
		'https://akabab.github.io/superhero-api/api/all.json',
		{
			method: 'GET',
			headers: headersList,
		}
	);

	const data = await response.json();

	

	return data;
};
