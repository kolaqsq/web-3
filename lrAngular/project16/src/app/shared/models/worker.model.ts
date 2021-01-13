export interface Worker {
  id?: number;
  surname: string;
  name: string;
  patronymic: string;
  phone: string;
  email: string;
  birthdate: string;
  department: number;
}

// export interface Worker {
//   id?: number;
//   surname: string | undefined;
//   name: string | undefined;
//   patronymic: string | undefined;
//   phone: string | undefined;
//   email: string | undefined;
//   birthdate: string | undefined;
//   department: number | undefined;
// }

export enum WorkerDepartment {
  it,
  sales,
  delivery,
  legal,
}
