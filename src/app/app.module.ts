import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './core/app-routing.module';
import { MaterialModule } from './core/material.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule} from '@angular/material/grid-list';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';

// NavComponent
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavComponent } from './core/nav/nav.component';
import { HomeComponent } from './@pages/home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListOfRegistersComponent } from './@pages/list-of-registers/list-of-registers.component';
import { ExpensiveDetailComponent } from './@pages/expensive-detail/expensive-detail.component';
import { ExpensiveComponent } from './@pages/expensive/expensive.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ChartsModule } from 'ng2-charts';

// import { Common/headerComponent } from './common/header/common/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    RegistrationComponent,
    ListOfRegistersComponent,
    ExpensiveDetailComponent,
    ExpensiveComponent,
    // MatPaginator
    
    // Common/headerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatSidenavModule,
    ChartsModule,
    // MatPaginator,
    // MatTableDataSource
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
