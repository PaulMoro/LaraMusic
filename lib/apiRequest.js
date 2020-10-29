import axios from "axios";
import {useState, useEffect } from 'react'

//const API_HOST = "https://carlos-rails-api.herokuapp.com";
const API_HOST = "https://laramusicapi.herokuapp.com";

const getUrl = (endpoint) => API_HOST + endpoint;

export const useApiRequest = (endpoint, data) => {
	const request  [storedValue, setValue] = useState(() => {

	})
	return (
		<div>
			
		</div>
	)
}


export const post = async (endpoint, data) => {
	return axios
		.post(getUrl(endpoint), data, {
			headers: { "Content-Type": "application/json", Accept: "application/json" },
		})
		.then((res) => {
			console.log(res.data);
		});
};

export const get = async (endpoint, jwt) => {
	const headers = jwt
		? {
				headers: { Authorization: `Bearer ${jwt}` },
		  }
		: null;
	return axios.get(getUrl(endpoint), headers);
};





//c01e7f72c6c168341d67256640e9f0df8cb986e0


