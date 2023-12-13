import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { VeiwUserComponent } from './veiw-user/veiw-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DitUserComponent } from './dit-user/dit-user.component';


const routes: Routes = [
  { path: '', component: ListUserComponent},
  { path: 'veiw/:id', component:VeiwUserComponent  },
  { path: 'Add', component: AddUserComponent },
  { path: 'dit', component: DitUserComponent },





  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
