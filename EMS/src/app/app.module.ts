import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeTitlePipe } from './employee/employee-list/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employee-count/employee-count.component';
import { SimpleComponent } from './other/simple/simple.component';

import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent},
    { path: 'employee/:id', component: EmployeeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponentComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        EmployeeComponent,
        EmployeeListComponent,
        EmployeeTitlePipe,
        EmployeeCountComponent,
        SimpleComponent,
        PageNotFoundComponentComponent,
        HomeComponent

    ],
    imports: [
        BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
