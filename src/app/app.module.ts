import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginationComponent } from './logination/logination.component';
import { UsersComponent } from './users/users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'users', component: UsersComponent},
  {path: 'login', component: LoginationComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'users/:id', component: SingleUserComponent},
  {path: 'update', component: UpdateComponent
    // children: [
    //   // {path: 'details', component: UserDetailsComponent},
    //   {path: 'update', component: UpdateComponent}
    // ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginationComponent,
    UsersComponent,
    SingleUserComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
