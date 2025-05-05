import axios from 'axios';
import { LoginValues } from 'types/auth';
const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage (or any other storage mechanism)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}

export async function login(data: LoginValues): Promise<LoginResponse> {
  const response = await httpClient.post('/api/auth/signin', data);
  return response.data;
}

export interface JobsQueryParams {
  page: number;
  pageSize: number;
  module: 'jobs';
  relations: object;
  columns: string[];
}

export async function getJobs(params: JobsQueryParams) {
  const response = await httpClient.post('/api/jobs/index', params);
  return response.data;
}

export async function getTabs(source: string) {
  const response = await httpClient.get(`/api/user/${source}/tabs`);
  return response.data;
}

export async function createTab(source: string) {
  const response = await httpClient.post(`/api/user/${source}/tabs/add`);
  return response.data;
}
