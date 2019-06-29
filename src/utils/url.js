import qs from 'qs';

export function parse (url) {
  return qs.parse(url, { comma: true, ignoreQueryPrefix: true });
}

export function stringify (urlParams) {
  return qs.stringify(urlParams, { arrayFormat: 'comma', encode: false });
}
