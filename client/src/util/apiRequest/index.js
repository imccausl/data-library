
import sendRequest from './sendRequest';
import { getDevice } from './handlers';

const apiHandlerWrapper = requestHandler => ({
  getDevice: (deviceId) => getDevice(requestHandler),
  
});

export default apiHandlerWrapper(sendRequest);