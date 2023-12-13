

import { Component, inject } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
 selector: 'app-add-user',
 templateUrl: './add-user.component.html',
 styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
 users: any;
 userservce :UserserviceService= inject(UserserviceService);
 applyForm = new FormGroup({
  id: new FormControl(''),
  name: new FormControl(''),
  age: new FormControl(''),
  add: new FormControl(''),
  password: new FormControl(''),
  email: new FormControl(''),
});

constructor(){
this.users=this.userservce.usercount()


}
submitApplication() {
  this.users.submitApplication(
    this.applyForm.value.id ?? '',
    this.applyForm.value.name ?? '',
    this.applyForm.value.age ?? '',
    this.applyForm.value.add ?? '',
    this.applyForm.value.password ?? '',
    this.applyForm.value.email ?? '',
  );
  alert("Your application has been submitted");
  location.reload();
  }
  save(){

    // const User = this.applyForm.value;
    // this.users.id = this.userservce.usercount() + 1;
    //   console.log(this.users);
        this.userservce.createuser(this.users);
        alert("data saves");

   }





    }


