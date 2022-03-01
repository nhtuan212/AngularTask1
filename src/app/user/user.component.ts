import { Component, OnInit } from '@angular/core';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';

interface userData {
    firstname: string | undefined;
    lastname : string | undefined;
    username : string | undefined;
    active   : number | undefined;
    project  : string | undefined;
    role     : string | undefined;
}
interface userProjectData {
    number : string | undefined;
    project: string | undefined;
    member : number | undefined;
    leader : number | undefined;
    admin  : number | undefined;
}
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    ngOnInit(): void {
    }
    
    title = 'Quản lý người dùng';

    constructor(config: NgbModalConfig, public AppComponent: AppComponent) {
        config.size = 'lg';
        config.backdrop = 'static';
        config.keyboard = false;
    }

    userDatas: userData[] = [
        {firstname: 'Nguyễn Hoàng', lastname: 'Tuấn', username: 'nht212', active: 1, project: 'School - Developers', role: 'Member',},
        {firstname: 'Lê Thị', lastname: 'Quỳnh Như', username: 'binayu', active: 0, project: 'School - Developers', role: 'Member',},
    ];
    userProjectDatas: userProjectData[] = [
        {number: '1', project: 'Developers', member       : 0, leader: 1, admin: 0,},
        {number: '2', project: 'Triển khai', member       : 1, leader: 0, admin: 0,},
        {number: '3', project: 'Hỗ trợ khách hàng', member: 0, leader: 0, admin: 1,},
    ];
}