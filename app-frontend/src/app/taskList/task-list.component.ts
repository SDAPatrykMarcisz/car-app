import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Task} from "@app/_models/task/task";
import {EditTaskComponent} from "@app/editTask";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TaskService} from "@app/_services/task.service";

@Component(
  {
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.scss']
  }
)
export class TaskListComponent implements OnInit {
  @Input() data: Array<Task>;
  @Input() label: string;
  @Input() withHeader: boolean = false;
  @Input() filterByStatus: string;

  @Output() dataEdited: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
  }

  constructor(private modalService: NgbModal,
              private taskService: TaskService) {
  }

  get tasks() {
    return this.filterData();
  }

  private filterData(): Array<Task> {
    if (!this.data || this.data.length == 0) {
      return [];
    }
    if (this.filterByStatus) {
      return this.data.filter(x => x.status == this.filterByStatus);
    }
    return this.data;
  }


  editTask(task: Task) {
    let ngbModalRef = this.modalService.open(EditTaskComponent, {
      windowClass: 'add-task-window',
      backdrop: 'static',
      keyboard: false,
      centered: true,
      size: "xl"
    });
    ngbModalRef.componentInstance.loadTaskToEdit(task);
    ngbModalRef.result.then(request => {
      if (request) {
        console.log(request);
        switch (request.operation) {
          case 'createOrUpdate': {
            this.taskService.update(request.data).subscribe(() => this.dataEdited.emit());
            break;
          }
          case 'delete': {
            this.taskService.delete(request.data).subscribe(() => this.dataEdited.emit());
            break;
          }
        }
      }
    }).catch(error => {
      console.log(error);
    })
  }

  deleteTask(task: Task) {

  }
}
