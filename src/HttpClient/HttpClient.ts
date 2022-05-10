import { POST } from "../Constants/api-constant";
import httpClientInterceptor from "../Interceptor/http-client-interceptor";
import { store } from "../State/store";

const { baseUrl, headers, interteptors } = httpClientInterceptor();

const HttpClient = () => {
  const get = async (url: string) => {
    interteptors.request(store);
    return fetch(baseUrl + url, { headers })
      .then(handleResponse)
      .finally(() => {
        interteptors.response(store);
      });
  };
  const post = async (url: string, body: Object) => {
    interteptors.request(store);
    return fetch(baseUrl + url, {
      method: POST,
      headers,
      body: JSON.stringify(body),
    })
      .then(handleResponse)
      .finally(() => {
        interteptors.response(store);
      });
  };
  const handleResponse = (response: Response) => {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  };

  return { get, post };
};

export default HttpClient;
