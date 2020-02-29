import config from 'config';

const fetchApi = (path, method = 'GET', data = null, headers = {}) => {
	const url = `${config.api.url}${path}`
	const options = {
		method,
		headers,
		body: data
	}
	return fetch(url, options)
		.then(response => response.json())
		.then(data => data)
		.catch(error => error)
}

export default fetchApi;
