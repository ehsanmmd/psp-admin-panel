import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  TooManyRequests = 429,
  InternalServerError = 500,
  BadRequestError = 400,
  ProxyUnauthorized = 407,
  NotAcceptable = 406,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Accept-Language': 'fa-IR',
};

function handleResponseError(data: any): string {
  let errorMessage = '';
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'string') {
      errorMessage += `🔸${value}`;
    } else if (Array.isArray(value)) {
      value.forEach((err) => {
        errorMessage += `🔸${key}: ${err}`;
      });
    } else if (value instanceof Object) {
      Object.entries(value).forEach(([k, v]) => {
        errorMessage += `🔸${k}: ${v}`;
      });
    } else {
      errorMessage = 'با پشتیبانی تماس بگیرید.';
    }
  });

  return errorMessage;
}

const strings = {
  contactUs: 'با پشتیبانی تماس بگیرید.',
};

export class Http {
  private instance: AxiosInstance | null = null;

  baseUrl = process.env.NEXT_PUBLIC_API;

  constructor(baseUrl?: string) {
    if (baseUrl) {
      this.baseUrl = baseUrl;
    }
  }

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: this.baseUrl,
      headers,
    });

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        return this.handleError(error);
      },
    );

    this.instance = http;
    return http;
  }

  async get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  async post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  async put<T>(url: string, data: object, config?: AxiosRequestConfig) {
    return this.http.put<T>(url, data, config);
  }

  async patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.patch<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  private handleError<T>(error: Error | AxiosError): T {
    if (axios.isAxiosError(error)) {
      const response = error?.response as AxiosResponse;
      if (response) {
        const { status, data } = response;

        switch (status) {
          case StatusCode.BadRequestError: {
            // 400 - Handle InternalServerError
            throw handleResponseError(data);
          }
          case StatusCode.Unauthorized: {
            // 401 - Handle Unauthorized
            break;
          }
          case StatusCode.Forbidden: {
            // 403 - Handle Forbidden
            console.error('شما به این بخش دسترسی ندارید');
            break;
          }
          case StatusCode.NotFound: {
            // 404 - Handle Not found
            throw handleResponseError(data);
          }
          case StatusCode.NotAcceptable: {
            // 406 - Handle proxy unauthorized
            console.error('شما نیاز به احراز هویت دارید');
            throw handleResponseError(data);
          }
          case StatusCode.TooManyRequests: {
            // 429 - Handle TooManyRequests
            break;
          }
          case StatusCode.InternalServerError: {
            // 500 - Handle InternalServerError
            break;
          }
          default:
            throw strings.contactUs;
        }
      }
    }
    throw strings.contactUs;
  }
}
const http = new Http();
export { type AxiosRequestConfig, http };
