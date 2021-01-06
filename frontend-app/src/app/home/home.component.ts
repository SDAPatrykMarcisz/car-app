import {Component, OnDestroy, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '@app/_models';
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
  users: User[];
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
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
    this.tasks = [
      {
        mark: 'Opel',
        model: 'Astra',
        mechanic: 'Patryk Marcisz',
        registerNumber: 'RJS 40S8',
        status: TaskStatus.NEW
      },
      {
        mark: 'Opel',
        model: 'Astra',
        mechanic: 'Patryk Marcisz',
        registerNumber: 'RJS 40S8',
        status: TaskStatus.NEW
      },
      {
        mark: 'Opel',
        model: 'Astra',
        mechanic: 'Patryk Marcisz',
        registerNumber: 'RJS 40S8',
        status: TaskStatus.FINISHED
      },
      {
        mark: 'Opel',
        model: 'Astra',
        mechanic: 'Patryk Marcisz',
        registerNumber: 'RJS 40S8',
        status: TaskStatus.FINISHED
      },
      {
        mark: 'Opel',
        model: 'Astra',
        mechanic: 'Patryk Marcisz',
        registerNumber: 'RJS 40S8',
        status: TaskStatus.IN_PROGRESS
      },
      {
        mark: 'Opel',
        model: 'Astra',
        mechanic: 'Patryk Marcisz',
        registerNumber: 'RJS 40S8',
        status: TaskStatus.IN_PROGRESS
      },
      {
        mark: 'Opel',
        model: 'Astra',
        mechanic: 'Patryk Marcisz',
        registerNumber: 'RJS 40S8',
        status: TaskStatus.INTERRUPTED
      },
      {
        mark: 'Opel',
        model: 'Astra',
        mechanic: 'Patryk Marcisz',
        registerNumber: 'RJS 40S8',
        status: TaskStatus.INTERRUPTED
      }
    ];
  }

  ngOnDestroy() {
    document.body.classList.remove('app-colored-background');
  }

  filterData(data: Array<Task>, status: TaskStatus): Array<Task> {
    if (data.length == 0) {
      return [];
    }
    console.log(data.filter(x => x.status == status));
    return data.filter(x => x.status == status);
  }
}
