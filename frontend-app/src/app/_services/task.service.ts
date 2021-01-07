import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '@environments/environment';
import {Task} from '@app/_models/task/task';

@Injectable({providedIn: 'root'})
export class TaskService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<any>(`${environment.apiUrl}/api/tasks`);
  }

  addNew(newTask: Task) {
    console.log('calling');
    console.log(newTask);
    this.http.post(
      `${environment.apiUrl}/api/tasks`,
      newTask
    ).subscribe();
    console.log('finished');
  }
}
