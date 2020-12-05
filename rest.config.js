export default function getRestConfig() {
  const config = {
    baseURL: '',
    headers: {
      common: {
        Authorization: `Bearer ${localStorage.getItem('Auth-Token')}`,
      },
    },
    timeout: 5000,
    withCredentials: false,
    responseType: 'application/json',
    responseEncoding: 'utf8',
  };

  if (process.env.NODE_ENV === 'development') {
    config.baseURL = 'http://192.168.101.171';
  }
  return config;
}
