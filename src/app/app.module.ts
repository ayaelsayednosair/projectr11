import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { VeiwUserComponent } from './veiw-user/veiw-user.component';
import { DitUserComponent } from './dit-user/dit-user.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    ErrorPageComponent,
    AddUserComponent,
    VeiwUserComponent,
    DitUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
