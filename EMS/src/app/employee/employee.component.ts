import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { IEmployee } from '../employee/employee';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';


//import {EmployeeListComponent} from './employee-list/employee-list.component';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css'],
    providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

    employee: IEmployee;
    empId: number;
    statusMessage: string = 'Loading data...Please wait';
    constructor(private employeeService: EmployeeService, private _activatedRoute: ActivatedRoute) { }

    //     .retryWhen((err) => {
    //    return err.scan((retryCount, val) => {
    //        retryCount += 1;
    //        if (retryCount < 6) {
    //            this.statusMessage = 'Retrying...Attempt #' + retryCount;
    //            return retryCount;
    //        }
    //        else {
    //            throw (err);
    //        }
    //    }, 0).delay(1000)
    //})
    ngOnInit() {
        let empId = this._activatedRoute.snapshot.params['id'];
        alert('Parameter ' + empId);
        if (empId == null) {
            this.statusMessage = "Invalid request.";
        }
        else {
            this.employeeService.getEmployee(this._activatedRoute.snapshot.params['id'])
                .retryWhen((err) => {
                    return err.scan((retryCount, val) => {
                        retryCount += 1;
                        if (retryCount < 6) {
                            this.statusMessage = 'Retrying....Attempt #' + retryCount;
                            return retryCount;
                        }
                        else {
                            throw (err);
                        }
                    }, 0).delay(2000)
                })
                .subscribe((emp) => {
                    if (emp == null) {
                        this.statusMessage = "Employee with id : " + this.empId + ' is not found';
                    }
                    else {
                        this.employee = emp;
                    }
                }, (error) => {
                    this.statusMessage = 'Problem with the service';
                    console.error(error);
                });


            //this.employeeService.getPromiseEmployee(this._activatedRoute.snapshot.params['id'])
            //    .then((employeeData) => {
            //        if (employeeData == null) {
            //            this.statusMessage =
            //                'Employee with the specified Employee Code does not exist';
            //        }
            //        else {
            //            this.employee = employeeData;
            //        }
            //    },
            //    (error) => {
            //        this.statusMessage =
            //            'Problem with the service. Please try again after sometime';
            //        console.error(error);
            //    });
        }
    }

}
