import {Component, Input} from '@angular/core';
import {Task} from "../../../Model/Task"
import {MatTableModule} from "@angular/material/table";
import {TasksService} from '../../Services/tasks.service'
import {MatDialog} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class TableComponent {
  @Input() tasks: Task[] =[];

  constructor(private http:TasksService,public dialog: MatDialog) {
  }
  displayedColumns: string[] = [ 'Task_name', 'Task_description', 'Task_creation','Task_hours','Manage'];

  delete(element){
    this.http.DeleteTaskUser(element).subscribe();
    window.location.reload()
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-dialog',
  template: `
      <div style="width: 500px" class="d-flex justify-content-center flex-column p-3">
          <h1>Create task</h1>
          <form class="d-flex flex-column">
              <label>Task Name</label>
              <input class="my-2" type="text" name="Task_name"  [(ngModel)]="singletask.Task_name">
              <label>Task Description</label>
              <input class="my-2" type="text" name="Task_description" [(ngModel)]="singletask.Task_description">
              <label>Task Hours</label>
              <input class="my-2" type="number" min="1"  name="Task_hour" [(ngModel)]="singletask.Task_hours">
              <label>Date of creation</label>
              <input class="my-2" type="date" name="Task_creation" [(ngModel)]="singletask.Task_creation">
              <label>Date of ending</label>
              <input class="my-2" type="date" name="Task_end" [(ngModel)]="singletask.Task_end">
              <button type="submit" (click)="createTask()"
                      style=" background-color: forestgreen;color: white;padding: 5px;border-radius: 10px">Create
              </button>
          </form>
      </div>
  `,
  imports: [
    FormsModule
  ],
  standalone: true
})
export class DialogComponent {
singletask:Task={Task_name:"",Task_description:"",Task_hours:1,Task_creation:"",Task_end:"",Id_user:0}

  constructor(private http:TasksService) {
  }
  createTask(){
  const storage =localStorage.getItem("data") ;

  let jsondata = JSON.parse(storage)
    this.singletask.Id_user = jsondata.id
    console.log(this.singletask)
    this.http.CreateTaskUser(this.singletask).subscribe()
    window.location.reload()
  }
}
