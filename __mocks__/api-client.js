export const mockExecuteServiceResult = [{ name: 'feature 1' }, { name: 'feature 2' }];
export async function executeService (params) {
  if (params.withError) throw new Error('mock error');
  if (params.noFeatures) return [];
  return mockExecuteServiceResult;
}

export const mockGetProcessResult = { id: 1 };
export async function getProcess (params) {
  return mockGetProcessResult;
}

export const mockGetProcessesResult = [{ id: 1 }, { id: 2 }];
export async function getProcesses () {
  return mockGetProcessesResult;
}

export const mockGetServiceResult = { id: 1, name: 'test-service', process: 'test-process' };
export async function getService (params) {
  return mockGetServiceResult;
}

export const mockGetServicesResult = [
  { id: 1, tags: ['geojson'] },
  { id: 2, tags: ['geojson'] }
];
export async function getServices () {
  return mockGetServicesResult;
}
