import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name="";
  email="";
  password="";

  constructor(private router: Router,private fb:FormBuilder,private ds:DataService) { }

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:  ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    psw:['', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
    ]]
  })

  ngOnInit(): void {
  }

  register(){
  var name = this.name;
  var email = this.email;
  var password =this.password;
  const result = this.ds.register(name,email,password);
    
  if(result){
   alert('Register Successful')
   this.router.navigateByUrl('');
  }
  else{
    alert('Registeration failed')
  }
  }
log(){
  this.router.navigateByUrl('');
}
}
