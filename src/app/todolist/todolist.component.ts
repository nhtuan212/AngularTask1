import { Component, OnInit } from '@angular/core';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';

interface todoData {
    number      : string | undefined;
    content     : string | undefined;
    name        : string | undefined;
    limit       : number;
    time        : string | undefined;
    deliveryDate: string | undefined;
    note        : string | undefined;
    status      : number;
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

    constructor(config: NgbModalConfig, public AppComponent: AppComponent,) {
        config.size = 'lg';
        config.backdrop = 'static';
        config.keyboard = false;
    }

    ngOnInit(): void {}

    title = 'To-Do List';

    limitBorder(limit: number): string {
        if(limit >= 7 ) return 'border-danger';
        if(limit > 2 && limit < 7 ) return 'border-warning';
        return 'border-primary';
    }

    todoDatas: todoData[] = [
        {number: '1', content: 'Cần release module nhân sự cho KH', name: 'Hoàng Tuấn', limit: 2, time: '15/10', deliveryDate: '12/09', note: '',status: 1,},
        {number: '2', content: 'Cần release module nhân sự cho KH', name: 'Quỳnh Như', limit: 5, time: '15/10', deliveryDate: '12/09', note: '',status: 0,},
        {number: '3', content: 'Cần release module nhân sự cho KH', name: 'Tuấn Anh', limit: 7, time: '15/10', deliveryDate: '12/09', note: '',status: 1,},
        {number: '4', content: 'Cần release module nhân sự cho KH', name: 'Trần Tiến', limit: 9, time: '15/10', deliveryDate: '12/09', note: '',status: 0,},
    ];
}
