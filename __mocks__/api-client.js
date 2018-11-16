export const mockExecuteServiceResult = { id: 1, name: 'test-service' };
export async function executeService (result) {
  return mockExecuteServiceResult;
}

export const mockGetProcessResult = { id: 1 };
export async function getProcess (result) {
  return mockGetProcessResult;
}

export const mockGetProcessesResult = [{ id: 1 }, { id: 2 }];
export async function getProcesses () {
  return mockGetProcessesResult;
}

export const mockGetServiceResult = { id: 1, name: 'test-service', process: 'test-process' };
export async function getService (result) {
  return mockGetServiceResult;
}

export const mockGetServicesResult = [
  { id: 1, tags: ['geojson'] },
  { id: 2, tags: ['geojson'] }
];
export async function getServices () {
  return mockGetServicesResult;
}
