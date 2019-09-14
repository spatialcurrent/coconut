import { LOAD_QUERIES } from 'action-types';
import storage from 'utils/storage';
import { getServices } from 'api-client';

export default function () {
  return async dispatch => {
    // first preload cached queries if they exist
    const cachedQueries = storage.get('queries', []);
    dispatch({ queries: cachedQueries, type: LOAD_QUERIES });

    const services = await getServices();
    const queries = services.filter(service => service.tags && service.tags.includes('geojson'));

    // cache newly loaded queries
    storage.set('queries', queries);
    return dispatch({ queries, type: LOAD_QUERIES });
  };
}
