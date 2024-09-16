import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Task } from "../../Model/Task";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  getAllTasks = []
  constructor(private http: HttpClient) { }

  GetTasksUser(): Observable<Task[]> {
    return this.http.get<Task[]>(`http://localhost:3000/api/get/tasks`)
  }

  DeleteTaskUser(data): Observable<Task> {
    return this.http.post<Task>('http://localhost:3000/api/tasks/delete', data)
  }

  CreateTaskUser(data): Observable<Task> {
    return this.http.post<Task>('http://localhost:3000/api/tasks/create', data)
  }
}
