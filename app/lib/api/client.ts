import { API_HOST, API_REQUEST_OPTIONS } from '@/app/constants/api';

export const getRequest = async (path: string) => {
  const response = await fetch(`${API_HOST}${path}`, {
    method: 'GET',
    headers: API_REQUEST_OPTIONS.headers,
  });

  if (response.status !== 200) {
    throw new Error(`HTTP error Status: ${response.status}`);
  }

  return response.json();
};
