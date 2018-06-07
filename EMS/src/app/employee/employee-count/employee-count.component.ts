import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-employee-count',
    templateUrl: './employee-count.component.html',
    styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
   

    selectedRadioValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;

    @Input()
    female: number;

    @Input() male: number;


    onRadioButtonSelectionChanged() {
        //debugger;
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioValue);
        console.log(this.selectedRadioValue);
    }


    ngOnInit() {
    }

}
