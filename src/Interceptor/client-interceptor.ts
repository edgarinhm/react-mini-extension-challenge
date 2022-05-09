const ClientInterceptor = () => {
  return {
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
    },
  };
};

export default ClientInterceptor;
