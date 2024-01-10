import {Component, OnInit} from '@angular/core';
import {User_serviceService} from '../../Services/auth.service'
import {User} from "../../../Model/User";
import {TasksService} from "../../Services/tasks.service";
import {Task} from "../../../Model/Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],

})
export class TasksComponent implements OnInit{

  Users:User;
  tasks:Task[]=[]
  constructor(private http_user:User_serviceService, private task:TasksService){}

  ngOnInit(){
    this.getAllUsers()
    this.gettasks()
    // this.getAllUsers();
  }
  getAllUsers(){
    const datauser = localStorage.getItem('data');
    let finaluser =JSON.parse(datauser)
    this.http_user.getUser(finaluser.id).subscribe(response=>{
      this.Users = response;
    })
  }

  gettasks(){
    const datas =localStorage.getItem('data');
      const data = JSON.parse(datas)
    this.task.GetTasksUser(data.id).subscribe(resp=>{
      this.tasks = resp;
    })
  }
}
