import API from '../api';

async function getPlan(requestHandler, planId) {
    const endpoint = `${API.endpoint.plans}/${planId}`
  const response = await requestHandler(endpoint);

  return response;
}


export { getPlan };