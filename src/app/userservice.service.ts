import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  [x: string]: any;
  getUsers() {
    throw new Error('Method not implemented.');
  }


  constructor() {}

  getallusers():User[]{
    return this.users

  }


  getUserById(id: number): User|undefined {
  return  this.users.find(user => user.id === id);


}
DeletUser(id:number){

  const index=this.users.findIndex(user => user.id === id)
  this.users.splice(index,1);
}
usercount():number{
  return this.users.length;
}
createuser(user :User){

  this.users.push(user);
}

submitApplication(id: number, name: string, age: number,add:string,password:string,email:string) {

  const newUser: User = {
    id:id,
    name: name,
    age: age,
    add:add,
    password: password,
    email: email
  };
  console.log("new user",newUser);





}
private users:User[]=[
{

  id:1,
  name:"aya",
  age :30,
  email:"ayaelsayed@gmail.com",
  password:"123",
 add:"tanta"

},
{

  id:2,
  name:"asmaa",
  age :30,
  email:"ayaelsayed@gmail.com",
  password:"123",
 add:"cairo"

},
{

  id:3,
  name:"mona",
  age :30,
  email:"ayaelsayed@gmail.com",
  password:"123",
 add:"tanta"

},
{

  id:4,
  name:"Ahmed",
  age :30,
  email:"ayaelsayed@gmail.com",
  password:"123",
 add:"tanta"

},


  ]
}
