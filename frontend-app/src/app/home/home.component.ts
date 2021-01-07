import {Component, OnDestroy, OnInit} from '@angular/core';

import {UserService} from '@app/_services';
import {Task} from '@app/_models/task/task';
import {TaskService} from "@app/_services/task.service";
import {AddTaskComponent} from "@app/addTask";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component(
  {
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
  }
)
export class HomeComponent implements OnInit, OnDestroy{
  loading = false;
  tasks: Array<Task>;

  constructor(
    private userService: UserService,
    private taskService: TaskService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    document.body.classList.add('app-colored-background');
    this.reloadTasks();
  }

  private reloadTasks() {
    this.loading = true;
    this.taskService.getAll().subscribe(response => {
      this.loading = false;
      this.tasks = response.taskList;
    });
  }

  ngOnDestroy() {
    document.body.classList.remove('app-colored-background');
  }

  addTaskModal(){
    this.modalService.open(AddTaskComponent, {
      windowClass: 'add-task-window',
      backdrop: 'static',
      keyboard: false,
      centered: true,
      size: "xl"
    }).result.finally(() => this.reloadTasks())
  }
}
