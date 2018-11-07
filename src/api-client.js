import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: { 'Content-Type': 'application/json' },
});

export async function getServices () { // eslint-disable-line
  const { data } = await client.get('/services.json');
  return data.services;
}

export async function getProcesses () {
  const { data } = await client.get('/processes.json');
  return data.processes;
}

export async function executeService ({ service }) {
  const { data } = await client.post('/services/exec.json', { service });
  return data;
}
