# EMS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Database Script 
Create Database EMS
Go

Use EmployeeDB
Go

Create table tblEmployees
(
     id int identity primary key,
     name nvarchar(50),
     gender nvarchar(50),
     annualSalary decimal(18,3),
     dateOfBirth nvarchar(50)
)
Go

Insert into tblEmployees values ('Tom', 'Male', 5500, '6/25/1988')
Insert into tblEmployees values ('Alex', 'Male', 5700.95, '9/6/1982')
Insert into tblEmployees values ('Mike', 'Male', 5900, '12/8/1979')
Insert into tblEmployees values ('Mary', 'Female', 6500.826, '10/14/1980')
Insert into tblEmployees values ('Nancy', 'Female', 6700.826, '12/15/1982')
Insert into tblEmployees values ('Steve', 'Male', 7700.481, '11/18/1979')
