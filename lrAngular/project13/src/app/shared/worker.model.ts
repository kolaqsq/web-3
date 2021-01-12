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

export let WorkerDatabase: Worker[] = [
  {id: 1, name: 'Иван', surname: 'Иванов', phone:'+7 (800) 555-35-35', type: 0},
  {id: 2, name: 'Петр', surname: 'Первый', phone:'+7 (800) 228-28-28', type: 1},
  {id: 3, name: 'Сидр', surname: 'Тархунов', phone:'+7 (800) 420-69-96', type: 2},
  {id: 4, name: 'Василий', surname: 'Пупкин', phone:'+7 (800) 101-13-77', type: 3},
]
