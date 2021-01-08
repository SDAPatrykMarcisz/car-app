import {Component, OnDestroy, OnInit} from '@angular/core';

import {UserService} from '@app/_services';
import {Task} from '@app/_models/task/task';
import {TaskService} from "@app/_services/task.service";
import {EditTaskComponent} from "@app/editTask";
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

  public reloadTasks() {
    this.loading = true;
    this.taskService.getAll().subscribe(response => {
      this.loading = false;
      this.tasks = null;
      this.tasks = response.taskList;
    });
  }

  ngOnDestroy() {
    document.body.classList.remove('app-colored-background');
  }

  addTaskModal(){
    this.modalService.open(EditTaskComponent, {
      windowClass: 'add-task-window',
      backdrop: 'static',
      keyboard: false,
      centered: true,
      size: "xl"
    }).result.then(request => this.taskService.addNew(request).subscribe(() => this.reloadTasks()))
  }
}
