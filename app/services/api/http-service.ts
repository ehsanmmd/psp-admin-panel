/* eslint-disable valid-typeof */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  ResponseType,
} from 'axios';
import axios from 'axios';

const httpService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Accept-language': 'en-US',
  },
  withCredentials: true,
});

async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig,
): Promise<T> {
  const response: AxiosResponse = await httpService(url, options);
  return response.data as T;
}

async function getData<T>(
  url: string,
  headers?: AxiosRequestHeaders,
  responseType?: ResponseType,
): Promise<T> {
  const options: AxiosRequestConfig = {
    headers,
    method: 'GET',
    responseType: responseType || 'json',
  };
  return apiBase<T>(url, options);
}

async function postData<TPayload, TResult>(
  url: string,
  data: TPayload,
  config?: AxiosRequestConfig,
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: 'POST',
    data,
    headers: config?.headers,
    withCredentials: config?.withCredentials,
  };

  return apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders,
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: 'PUT',
    headers,
    data: JSON.stringify(data),
  };

  return apiBase<TResult>(url, options);
}

async function deleteData(
  url: string,
  headers?: AxiosRequestHeaders,
): Promise<void> {
  const options: AxiosRequestConfig = {
    method: 'DELETE',
    headers,
  };

  return apiBase(url, options);
}

export { deleteData, getData, postData, updateData };
