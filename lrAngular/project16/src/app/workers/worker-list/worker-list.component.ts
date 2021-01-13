import {Component, OnInit} from '@angular/core';
import {Worker} from "../../shared/models/worker.model";
import {WorkersService} from "../../shared/services/workers.service";
import {Router} from "@angular/router";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.sass']
})
export class WorkerListComponent implements OnInit {
  workers: Worker[] = [];
  filterValue = '';

  constructor(private workersService: WorkersService, private router: Router) {
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      let users = this.workersService.getAll();
      this.workers = isNullOrUndefined(await users) ? [] : await users;
    } catch (err) {
      console.error(err);
    }
  }

  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'profile', id]);
  }

  onAddProfile() {
    this.router.navigate([this.router.url, 'profile']);
  }

  async onDelete(id: number) {
    try {
      await this.workersService.deleteOneById(id);
    } catch (err) {
      console.error(err);
    } finally {
      await this.getData();
    }
  }
}
