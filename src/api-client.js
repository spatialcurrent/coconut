import axios from 'axios';

const client = axios.create({
  baseURL: window.API_URL, // eslint-disable-line
  headers: { 'Content-Type': 'application/json' },
});

export async function executeService ({ service }) {
  const { data } = await client.post(`/services/${service}/exec.json`);
  return data;
}

export async function getProcess (process) {
  const { data } = await client.get(`/processes/${process}.json`);
  return data.item;
}

export async function getProcesses () {
  const { data } = await client.get('/processes.json');
  return data.items;
}

export async function getService (service) {
  const { data } = await client.get(`/services/${service}.json`);
  return data.item;
}

export async function getServices () {
  const { data } = await client.get('/services.json');
  return data.items;
}

export async function getDatastore (datastore) {
  const { data } = await client.get(`/datastores/${datastore}.json`);
  return data.item;
}
