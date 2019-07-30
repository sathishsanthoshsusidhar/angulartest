import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../login/login.component';
import { HomeComponent } from './../@pages/home/home.component';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';
import { RegistrationComponent } from './../registration/registration.component';
import { ListOfRegistersComponent } from './../@pages/list-of-registers/list-of-registers.component';
import { ExpensiveDetailComponent } from './../@pages/expensive-detail/expensive-detail.component';
import { ExpensiveComponent } from './../@pages/expensive/expensive.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard]
  },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'list-of-registers', component: ListOfRegistersComponent },
  { path: 'expensive-detail', component: ExpensiveDetailComponent},
  { path: 'expensive', component: ExpensiveComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthGuard, AuthService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
