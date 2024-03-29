import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  // {
  //   path : 'dashboard',
  //   component : DashboardComponent
  // },

  // {path : 'create' , component: AddUserComponent},
  {
    path:'users',
    component: DashboardComponent,
    children:[
      {path : '', component: ListUsersComponent},
      {path : 'list', component: ListUsersComponent},
      {path : 'delete/:id', component: DeleteUserComponent},
      {path : 'edit/:id', component: EditUserComponent},
      {path : 'view/:id', component: ViewUserComponent},
      {path : 'create' , component: AddUserComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
