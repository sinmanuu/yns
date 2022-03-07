const apiURL = "http://127.0.0.1:3000/";

export default function getExperiencias() {
	return fetch(apiURL)
		.then((res) => res.json())
		.then((response) => {
			return response;
		});
}
