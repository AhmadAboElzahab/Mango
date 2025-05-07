import axios from 'axios';
import { useAuthStore } from 'store/auth.store';
import { LoginValues } from 'types/auth';
export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // ✅ this is critical for CORS
});

httpClient.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().user?.token; // ✅ Safe

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';

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
export async function getData(source: string) {
  const response = await httpClient.post(`/api/${source}/tabs/add`);
  return response.data;
}
export async function getProducts() {
  const response = await httpClient.get('/api/patients/'); // ✅ uses baseURL
  return response.data;
}
