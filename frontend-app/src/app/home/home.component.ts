import {Component, OnDestroy, OnInit} from '@angular/core';

import {UserService} from '@app/_services';
import {Task} from '@app/_models/task/task';
import {TaskStatus} from "@app/_models/task/task-status";
import {TaskService} from "@app/_services/task.service";

@Component(
  {
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
  }
)
export class HomeComponent implements OnInit, OnDestroy{
  loading = false;
  tasks: Array<Task>;
  taskStatus = TaskStatus;

  constructor(
    private userService: UserService,
    private taskService: TaskService
  ) {
  }

  ngOnInit() {
    document.body.classList.add('app-colored-background');
    this.loading = true;
    this.taskService.getAll().subscribe(response => {
      this.loading = false;
      this.tasks = response.taskList;
    });
  }

  ngOnDestroy() {
    document.body.classList.remove('app-colored-background');
  }

  filterData(data: Array<Task>, status: TaskStatus): Array<Task> {
    if (!data || data.length == 0) {
      return [];
    }
    // console.log(data.filter(x => x.status == status));
    return data.filter(x => x.status == status);
  }
}
