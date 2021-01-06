import {Component} from '@angular/core';
import {Sensor} from "./shared/models/sensor.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'project11';
  sensors: Sensor[] = [];
  id_last: number = 0;

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.id_last++;
      this.sensors.push(new Sensor(this.id_last, 'Датчик ' + (i + 1)));
    }
  }

  deleteSensor(id: number) {
    this.sensors.splice(id, 1);
  }

  addSensor(name: string, status: string) {
    this.id_last++;
    this.sensors.push(new Sensor(this.id_last, name, (status == "true")));
  }
}
