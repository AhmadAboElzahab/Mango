import axios from 'axios';

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

export interface VerifyLoginDto {
  email: string;
  otp: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  photo: null;
  status: 'active' | 'inactive';
  department_id: number;
  position_id: number;
  department: {
    id: number;
    name: string;
  };
  position: {
    id: number;
    name: string;
  };
  roles: { id: number; name: string }[];
}

export interface VerifyLoginResponse {
  user: User;
  token: string;
  permissions: string[];
  google_calendar_token: null | string;
}

export async function login(data: LoginDto): Promise<LoginResponse> {
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
