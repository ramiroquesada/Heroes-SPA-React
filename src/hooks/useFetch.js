export const getHeroesFetch = async () => {
	const headersList = {
		Accept: '*/*',
		'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
	};

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
