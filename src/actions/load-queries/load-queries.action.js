import { LOAD_QUERIES } from 'action-types';
import { getServices } from 'api-client';

export default function () {
  return async (dispatch) => {
    const services = await getServices();
    const queries = services.map(service => ({
      ...service,
      service: service.name,
    }));
    return dispatch({ queries, type: LOAD_QUERIES });
  };
}
