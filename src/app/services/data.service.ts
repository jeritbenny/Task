import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

   //database
   userDetails:any={
    'jerry.jbk@gmail.com':{name:'jerry',email:'jerry.jbk@gmail.com',password:'JJ@123kk'},
    'jerit.jbkk@gmail.com':{name:'jert',email:'jerit.jbkk@gmail.com',password:'123@jjkK'}

  }
  register(name:any,email:any,password:any){
    let userDetails = this.userDetails
    if(email in userDetails){
      return false;
    }
    else{
      userDetails[email]={
        name:name,
        email:email,
        password:password
      }
      console.log(userDetails);
      
      return true;
    }
  }
}
