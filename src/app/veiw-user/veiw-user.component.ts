import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';

@Component({
  selector: 'app-veiw-user',
  templateUrl: './veiw-user.component.html',
  styleUrls: ['./veiw-user.component.css']
})
export class VeiwUserComponent {
route: ActivatedRoute = inject(ActivatedRoute);
Userservec = inject(UserserviceService);
user : User|undefined;

constructor() {
  const userID = Number(this.route.snapshot.params['id']);
  this.user = this.Userservec.getUserById(userID);
}
}
