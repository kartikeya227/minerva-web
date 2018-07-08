import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('/book/user').subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  saveBook(username , password) {
    for(let user of this.users)
    {
      if((user.username==username)&&(user.password==password))
      {
        this.router.navigate(['/books']);
        alert("Login succesful as "+user.username);
        return;
      }
    }
    alert("login unsuccesful, username or password didn't match.");
  }
}
