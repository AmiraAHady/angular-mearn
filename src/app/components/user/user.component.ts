import { Component } from '@angular/core';
import { Admin } from '../../models/admin';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {


  user1:User=new User(123,'amira','amira@gmail.com')

  admin1:Admin={
    id:345,
    name:'Hamada',
    role:'Sub-Admin'
  }

  // userName:string='amira';
  // userAge:number=23;
  
  // userAge !:number

  // getName(){
  //   return this.userName;
  // }

  

}
