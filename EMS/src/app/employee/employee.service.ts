import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/throw';

@Injectable()
export class EmployeeService {

    constructor(private _http:Http) { }


    getEmployees(): Observable<IEmployee[]>{
        //debugger;
        return this._http.get('http://localhost:63082/api/employee')
            //.map((response: Response) => <IEmployee[]>response.json())
            .map(this.BindObject)
            .catch(this.handleError);
    }

    getEmployee(id: number): Observable<IEmployee> {
        //alert('Get employee called with parameter'+id);
        let url: string = 'http://localhost:63082/api/employee/' + id;
        //alert('Generated URL : ' + url);
        return this._http.get(url)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);
    }

    


    BindObject(emps: Response) {
        console.log(emps);
        return <IEmployee>emps.json();
    }

    handleError(error:Response){
        //console.error(error);
        console.log("Error occurred : "+error);
        return Observable.throw(error);

    }


    handlePromiseError(error: Response) {
        //console.error(error);
        console.log("Error occurred : " + error);
        throw (error);

    }

    //getEmployees(): IEmployee[] {
    //    //return [
    //    //    { id: 101, name: 'Sachin Tendulkar', dob: '17/09/1978', salary: 14575, gender: 'male' },
    //    //    { id: 102, name: 'Rahul Dravid', dob: '7/07/1977', salary: 20000, gender: 'male' },
    //    //    { id: 103, name: 'Mithali Raj', dob: '15/10/1978', salary: 14575, gender: 'female' },
    //    //    { id: 104, name: 'Rohit Sharma', dob: '17/09/1978', salary: 14575, gender: 'male' },
    //    //    { id: 105, name: 'Virat Kohli', dob: '17/09/1978', salary: 14575, gender: 'male' },
    //    //    { id: 106, name: 'Harmanpreet Kaur', dob: '07/02/1994', salary: 1054647, gender: 'female' },
    //    //    { id: 107, name: 'MS Dhoni', dob: '17/09/1978', salary: 14575, gender: 'male' },
    //    //    { id: 108, name: 'Zaheer Khan', dob: '17/09/1978', salary: 14575, gender: 'male' }

    //    //];


    //}

}
