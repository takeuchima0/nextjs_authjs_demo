export const API_HOST = process.env.NEXT_PUBLIC_V1_API_BASE_URL ?? '';
export const API_REQUEST_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.API_KEY ?? 'ABCDEFG123456789'}`,
  },
  withCredentials: true,
};
