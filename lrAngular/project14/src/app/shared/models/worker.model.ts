export interface Worker {
  id?: number;
  name: string | undefined;
  surname: string | undefined;
  phone: string | undefined;
  type: number | undefined;
}

export enum WorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}
