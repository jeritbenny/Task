import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email="";
  password="";

 

  constructor(private router: Router,private fb:FormBuilder,private ds: DataService) { }


  LoginForm=this.fb.group({
    email:  ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    psw:['', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
    ]]
  })

  ngOnInit(): void {
  }

  login(){
   //alert('clicked')
   var email= this.email;
   var password= this.password;
   var userDetails= this.ds.userDetails;

   if(email in userDetails){
    if(password==userDetails[email]['password']){
      alert('Login successful')
      this.router.navigateByUrl('dashboard');
    }
    else{
      alert('Invalid password');
      this.router.navigateByUrl('login');

    }
   }
   else{
    alert('Invalid UserDetails')
    this.router.navigateByUrl('login');

   }
  }

  reg(){
    this.router.navigateByUrl('/register')
  }

}
