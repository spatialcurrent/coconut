import { GET_QUERY } from 'action-types';
import { getProcess, getService } from 'api-client';

export default function (serviceName) {
  return async dispatch => {
    const service = await getService(serviceName);
    const process = await getProcess(service.process);
    const query = {
      ...process,
      ...service,
    };

    dispatch({ query, type: GET_QUERY });
  };
}
