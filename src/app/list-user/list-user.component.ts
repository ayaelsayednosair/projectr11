import { UserserviceService } from './../userservice.service';
import { User } from './../user';
import { Component, inject } from '@angular/core';



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

users:User[]=[];
userservce :UserserviceService= inject(UserserviceService);

// constructor(private service: UserserviceService) {
//   this.userservce = service;
// }

// ngOnInit(): void {
//   this.getUsers();
// }

// getUsers(): void {
//   this.userservce.getUsers()

// }
constructor(){

this.users =this.userservce.getallusers()


}
DeletUser(id:number){
  this.userservce.DeletUser(id)
}

}



