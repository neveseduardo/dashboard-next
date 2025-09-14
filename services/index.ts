import axios, { AxiosInstance } from 'axios';

const httpClient: AxiosInstance = axios.create({
	baseURL: process.env.API_BASE,
	headers: {
		'Content-Type': 'application/json',
	},
	timeout: 10000,
	withCredentials: true,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
httpClient.interceptors.request.use((config: any) => {
	return config;
});

export default httpClient;
