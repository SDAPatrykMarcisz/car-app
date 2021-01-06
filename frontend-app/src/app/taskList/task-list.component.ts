import {Component, Input, OnInit} from '@angular/core';

import {Task} from "@app/_models/task/task";
import {TaskStatus} from "@app/_models/task/task-status";

@Component(
  {
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.scss']
  }
)
export class TaskListComponent implements OnInit{
  @Input() data: Array<Task>;
  @Input() label: string;
  @Input() withHeader: boolean = false;
  taskStatus = TaskStatus;

  ngOnInit(): void {
    console.log(this.data);
  }


}
