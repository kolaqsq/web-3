export interface Worker {
  id?: number;
  name: string | undefined;
  surname: string | undefined;
  type: number | undefined;
}

export enum WorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let WorkerDatabase: Worker[] = [
  {id: 1, name: 'Иван', surname: 'Иванов', type: 0},
  {id: 2, name: 'Петр', surname: 'Первый', type: 1},
  {id: 3, name: 'Сидр', surname: 'Тархунов', type: 2},
  {id: 4, name: 'Василий', surname: 'Пупкин', type: 3},
]
