import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {


    employees: IEmployee[];
    statusMessage: string = "Loading data....Please wait";
    selectedEmployeeCountRadioButton: string = 'all';
    //sampleInputFromParentComponent: string = "Sachin";


    constructor(private empService: EmployeeService) {
        //this.employees = [
        //    { id: 101, name: 'Sachin Tendulkar', dob: '17/09/1978', salary: 14575, gender: 'male' },
        //    { id: 102, name: 'Rahul Dravid', dob: '7/07/1977', salary: 20000, gender: 'male' },
        //    { id: 103, name: 'Mithali Raj', dob: '15/10/1978', salary: 14575, gender: 'female' },
        //    { id: 104, name: 'Rohit Sharma', dob: '17/09/1978', salary: 14575, gender: 'male' },
        //    { id: 105, name: 'Virat Kohli', dob: '17/09/1978', salary: 14575, gender: 'male' },
        //    { id: 106, name: 'Harmanpreet Kaur', dob: '07/02/1994', salary: 1054647, gender: 'female' },
        //    { id: 107, name: 'MS Dhoni', dob: '17/09/1978', salary: 14575, gender: 'male' },
        //    { id: 108, name: 'Zaheer Khan', dob: '17/09/1978', salary: 14575, gender: 'male' },
        //    { id: 109, name: 'Yuvraj Singh', dob: '17/09/1978', salary: 14575, gender: 'male' }
        //];

    }

    ngOnInit() {
        //this.employees = this.empService.getEmployees();
        this.empService.getEmployees()
            .retryWhen((error) => {
                return error.scan((retryCount, val) => {
                    retryCount += 1;

                    if (retryCount < 5) {
                        this.statusMessage = 'Retry attempt # ' + retryCount;
                        console.log('Retry attempt ' + retryCount);
                        return retryCount;
                    }
                    else {
                        throw (error);
                    }
                }, 0).delay(3000)
            })
            .subscribe(e => this.employees = e, error => {
                console.error(error);
                this.statusMessage = "Problem with the service, please try after some time.";
            });

    }




    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        //debugger;
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue.toLocaleLowerCase();
        //this.selectedEmployeeCountRadioButton = 'Male';
    }



    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(a => a.gender === 'male').length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(a => a.gender === 'female').length;
    }

    //getEmployees(): void{
    //    this.employees = [
    //        { id: 101, name: 'Sachin Tendulkar', dob: '17/09/1978', salary: 14575, gender: 'male' },
    //        { id: 102, name: 'Rahul Dravid', dob: '7/07/1977', salary: 20000, gender: 'male' },
    //        { id: 107, name: 'Mithali Raj', dob: '15/10/1978', salary: 14575, gender: 'female' },
    //        { id: 103, name: 'Rohit Sharma', dob: '17/09/1978', salary: 14575, gender: 'male' },
    //        { id: 104, name: 'Virat Kohli', dob: '17/09/1978', salary: 14575, gender: 'male' },
    //        { id: 107, name: 'Harmanpreet Kaur', dob: '07/02/1994', salary: 1054647, gender: 'female' },
    //        { id: 105, name: 'MS Dhoni', dob: '17/09/1978', salary: 14575, gender: 'male' },
    //        { id: 106, name: 'Zaheer Khan', dob: '17/09/1978', salary: 14575, gender: 'male' },
    //        { id: 107, name: 'Yuvraj Singh', dob: '17/09/1978', salary: 14575, gender: 'male' }
    //    ]


    //}

    //trackById(index: number, employees: any): string {
    //    return employees.id;
    //}

}
