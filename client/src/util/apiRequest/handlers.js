import API from '../api';

async function getDevice(requestHandler, deviceId) {
    const endpoint = `${API.endpoint.device}/${deviceId}`
  const response = await requestHandler(endpoint);

  return response;
}


export { getDevice };