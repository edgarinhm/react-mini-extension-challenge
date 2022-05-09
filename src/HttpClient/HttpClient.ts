import ClientInterceptor from "../Interceptor/client-interceptor";

const { baseUrl, headers } = ClientInterceptor();

const HttpClient = () => {
  const get = async (url: string) => {
    const response = await fetch(baseUrl + url, { headers });
    return response.json();
  };
  const post = async (url: string, body: Object) => {
    const response = await fetch(baseUrl + url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    return response.json();
  };

  return { get, post };
};

export default HttpClient;
