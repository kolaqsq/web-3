import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Worker} from "../models/worker.model";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  routeApi = 'http://localhost:3000/workers'

  constructor(private http: HttpClient) {
  }

  getWorkers(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postWorker(data: Worker): Promise<any> {
    return this.http.post(this.routeApi, data).toPromise();
  }

  deleteWorker(id: number): Promise<any> {
    let route = this.routeApi + '/' + id;
    return this.http.delete(route).toPromise();
  }

  redactWorker(data: Worker): Promise<any> {
    let route = this.routeApi + '/' + data.id;
    return this.http.put(route, data).toPromise();
  }
}
