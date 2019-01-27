import { GET_FEATURES } from 'action-types';
import closeLoader from 'actions/close-loader';
import openLoader from 'actions/open-loader';
import getQuery from 'actions/get-query';
import openAlert from 'actions/open-alert';
import { executeService } from 'api-client';

export default function (params) {
  return async dispatch => {
    dispatch(openLoader());
    try {
      const features = await executeService(params);
      if (features.length) {
        dispatch({ features, type: GET_FEATURES });
        await dispatch(getQuery(params.service));
      } else {
        dispatch(openAlert('There were no results found for this query. Please try another query.'));
      }
    } catch (e) {
      dispatch(openAlert('There was a problem executing this query. We have been notified of the problem and will work to fix it.'));
    }
    return dispatch(closeLoader());
  };
}
