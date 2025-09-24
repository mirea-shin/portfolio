// packages/shared/src/api.ts
import axios, { AxiosInstance } from 'axios';

// axios 인스턴스 생성 함수
export const createApiClient = (baseURL: string): AxiosInstance => {
  const client = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // 공통 요청 인터셉터
  client.interceptors.request.use(
    (config) => {
      console.log(
        `📡 API Request: ${config.method?.toUpperCase()} ${config.url}`
      );
      return config;
    },
    (error) => Promise.reject(error)
  );

  // 공통 응답 인터셉터
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('❌ API Error:', error.response?.data || error.message);
      return Promise.reject(error);
    }
  );

  return client;
};

// 공통 API 헬퍼 함수들
export const apiHelpers = {
  handleApiError: (error: any) => {
    if (error.response) {
      return error.response.data.message || 'API 요청 실패';
    }
    return error.message || '네트워크 오류';
  },

  createFormData: (data: Record<string, any>) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });
    return formData;
  },
};
