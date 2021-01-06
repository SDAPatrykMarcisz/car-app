import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Task } from '@app/_models/task/task';

@Injectable({ providedIn: 'root' })
export class TaskService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Task[]>(`${environment.apiUrl}/tasks`);
    }
}
