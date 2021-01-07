import {Component, Input, OnInit} from '@angular/core';

import {Task} from "@app/_models/task/task";

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
  @Input() filterByStatus: string;

  ngOnInit(): void {
  }

  get tasks(){
    return this.filterData();
  }

  private filterData(): Array<Task> {
    if (!this.data || this.data.length == 0) {
      return [];
    }
    if(this.filterByStatus){
      return this.data.filter(x => x.status == this.filterByStatus);
    }
    return this.data;
  }


}
