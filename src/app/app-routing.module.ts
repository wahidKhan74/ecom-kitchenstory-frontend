import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './create/create.component';


// create routes
const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'allproducts', component:AllproductsComponent},
  { path: 'aboutus', component:AboutusComponent},
  { path: 'login', component:LoginComponent},
  { path: 'users', component:UsersComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'create', component:CreateComponent},
  { path: 'reactive-form', component:ReactiveFormComponent},
  { path: '**', component:NotfoundComponent},
];

// register routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
