import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private authService: AuthService,private router:Router) { }
  ngOnInit() {
    
  }

  login(Customer_Email: string, Customer_Password: string): void {
    this.authService.signInUser(Customer_Email, Customer_Password).subscribe(
   response => {
         localStorage.setItem('username', Customer_Email);
         const token = response; 
         console.log(token);
         const tokenString = JSON.stringify(token);
         localStorage.setItem('token', tokenString);
         this.router.navigateByUrl('/choose');
    },
      error => {
        alert("Incorrect Username/Password")
        console.log(error);
      }
    );
  }

}
