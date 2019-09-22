
import sendRequest from './sendRequest';
import { getPlan } from './handlers';

const apiHandlerWrapper = requestHandler => ({
  getPlan: (planId) => getPlan(requestHandler, planId),
  
});

export default apiHandlerWrapper(sendRequest);