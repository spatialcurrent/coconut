import { GET_QUERY } from 'action-types';
import { getDatastore, getProcess, getService } from 'api-client';
import addNote from 'actions/add-note';

export default function (serviceName) {
  return async dispatch => {
    const service = await getService(serviceName);
    const process = await getProcess(service.process);
    const datastore = await getDatastore(service.datastore);
    const query = {
      ...datastore,
      ...process,
      ...service,
    };

    dispatch({ query, type: GET_QUERY });

    const note = {
      id: 'load-layer',
      message: 'Zoom in to view layer',
    };
    dispatch(addNote(note));
  };
}
