import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '@environments/environment';
import {Task} from '@app/_models/task/task';

@Injectable({providedIn: 'root'})
export class ClientService {
  constructor(private http: HttpClient) {
  }

  search(searchParams: string) {
    return this.http.get<any>(`${environment.apiUrl}/api/clients?search=${searchParams}`);
  }
}
