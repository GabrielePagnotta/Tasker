import {AfterViewInit, Component, OnInit} from '@angular/core';
import {User_serviceService} from "../../Services/auth.service";
import {User} from "../../../Model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private http_user: User_serviceService,private route:Router) {

  }

  ngOnInit(): void {
    this.http_user.IsloggedIn()
    }




  User: User = {Name: '', Email: '', Password: ''};


  SendSignup() {
    this.http_user.sendUser(this.User).subscribe(res => {
    }, error => {
      console.log(error)
    })
  }

  login() {
    this.http_user.loginUser(this.User).subscribe(resp => {
      if (resp) {
        console.log(`benvenuto ${resp.email}`)
        localStorage.setItem("data", JSON.stringify(resp))
        this.route.navigate(['/tasks'])
      } else {
        console.log("utente non trovato")
      }
    })
  }



}
