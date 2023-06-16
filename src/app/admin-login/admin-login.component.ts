import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  admin_Email: string = '';
  admin_Password: string = '';
  submitted: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(): void {
    this.submitted = true;

    if (this.admin_Email && this.admin_Password) {
      this.authService.signIn(this.admin_Email, this.admin_Password).subscribe(
        response => {
          localStorage.setItem('username', this.admin_Email);
          const token = response;
          console.log(token);
          const tokenString = JSON.stringify(token);
          localStorage.setItem('token', tokenString);
          this.router.navigateByUrl('/choose');
        },
        error => {
          alert("Incorrect Username/Password");
          console.log(error);
        }
      );
    }
  }
}
