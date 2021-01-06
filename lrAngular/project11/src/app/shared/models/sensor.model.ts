export class Sensor {
  id: number;
  name: string;
  status: boolean | undefined;

  constructor(id: number, name: string, status?: boolean) {
    this.id = id;
    this.name = name;
    if (status == undefined) {
      this.status = Math.random() < 0.5;
    } else {
      this.status = status;
    }
  }
}
