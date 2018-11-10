import { GET_FEATURES } from 'action-types';
import closeLoader from 'actions/close-loader';
import openLoader from 'actions/open-loader';
import getQuery from 'actions/get-query';
import { executeService } from 'api-client';

export default function (params) {
  return async dispatch => {
    dispatch(openLoader());
    const features = await executeService(params);
    dispatch({ features, type: GET_FEATURES });
    dispatch(getQuery(params.service));
    return dispatch(closeLoader());
  };
}
