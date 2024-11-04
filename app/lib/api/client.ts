import { API_HOST, API_REQUEST_OPTIONS } from '@/app/constants/api';
import { HTTPError } from '@/app/lib/api/error';

/**
 * シンプルなGETリクエストを送信する関数
 *
 * @param {string} path  - APIエンドポイントのパス。
 * @returns {Promise<T>} - APIのレスポンスデータ。JSON形式のデータを返します。
 * @throws {Error}       - HTTPリクエストが成功しなかった場合にエラーをスローします。
 */
export const getRequest = async <T>(path: string): Promise<T> => {
  const url = `${API_HOST}${path}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: API_REQUEST_OPTIONS.headers,
  });

  if (!response.ok) {
    throw new HTTPError(
      response.status,
      `HTTP error Status: ${response.status}`,
    );
  }

  return response.json() as Promise<T>;
};

/**
 * パスパラメータを使ってGETリクエストを送信する関数
 *
 * @param {string} path                                - APIエンドポイントのパス。パスパラメータは `:key` の形式で指定します。
 * @param {Record<string, string | number>} pathParams - パスパラメータを含むオブジェクト。キーはパス内のプレースホルダーに対応し、値はそのプレースホルダーに埋め込まれます。
 * @returns {Promise<T>}                               - APIのレスポンスデータ。JSON形式のデータを返します。
 * @throws {Error}                                     - HTTPリクエストが成功しなかった場合にエラーをスローします。
 */
export const getRequestWithPathParameters = async <T>(
  path: string,
  pathParams: Record<string, string | number>,
): Promise<T> => {
  // setup for path parameters
  Object.entries(pathParams).forEach(([key, value]) => {
    path = path.replace(`:${key}`, encodeURIComponent(value));
  });

  const url = `${API_HOST}${path}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: API_REQUEST_OPTIONS.headers,
  });

  if (!response.ok) {
    throw new HTTPError(
      response.status,
      `HTTP error Status: ${response.status}`,
    );
  }

  return response.json() as Promise<T>;
};

/**
 * クエリパラメータを使ってGETリクエストを送信する関数
 *
 * @param {string} path                                             - APIエンドポイントのパス。
 * @param {Record<string, string | number | boolean>} [queryParams] - クエリパラメータを含むオブジェクト。キーはパラメータ名、値はその値です。
 * @returns {Promise<T>}                                            - APIのレスポンスデータ。JSON形式のデータを返します。
 * @throws {Error}                                                  - HTTPリクエストが成功しなかった場合にエラーをスローします。
 */
export const getRequestWithQueryParameters = async <T>(
  path: string,
  queryParams: Record<string, string | number | boolean>,
): Promise<T> => {
  // setup for query parameters
  const queryString = queryParams
    ? '?' +
      new URLSearchParams(
        Object.entries(queryParams).reduce(
          (acc, [key, value]) => {
            // 各値を文字列に変換
            acc[key] = String(value);
            return acc;
          },
          {} as Record<string, string>,
        ),
      ).toString()
    : '';

  const url = `${API_HOST}${path}${queryString}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: API_REQUEST_OPTIONS.headers,
  });

  if (!response.ok) {
    throw new HTTPError(
      response.status,
      `HTTP error Status: ${response.status}`,
    );
  }

  return response.json() as Promise<T>;
};
