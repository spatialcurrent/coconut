import axios from 'axios';

const client = axios.create({
  baseURL: window.API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export async function executeService ({ service }) {
  const { data } = await client.post('/services/exec.json', { service });
  return data;
}

export async function getProcess (process) {
  const { data } = await client.get(`/processes/${process}.json`);
  return data.process;
}

export async function getProcesses () {
  const { data } = await client.get('/processes.json');
  return data.processes;
}

export async function getService (service) {
  const { data } = await client.get(`/services/${service}.json`);
  return data.service;
}

export async function getServices () {
  const { data } = await client.get('/services.json');
  return data.services;
}
