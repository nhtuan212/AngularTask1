import { Component, OnInit } from '@angular/core';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';

interface pinData {
    description: string | undefined;
    status     : string | undefined;
    name       : string | undefined;
    dateFinish : string | undefined;
    note       : string | undefined;
}

interface workManagementData {
    name      : string;
    totalTime : number;
    percentage: number;
    evaluate  : string;
    projects  : any;
}

@Component({
    selector: 'app-work-management',
    templateUrl: './work-management.component.html',
    styleUrls: ['./work-management.component.css'],
})
export class WorkManagementComponent implements OnInit {
    title = 'Quản lý công việc';

    constructor(config: NgbModalConfig, public AppComponent: AppComponent) {
        config.size = 'lg';
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit(){};

    resourceIcons(number: number): string {
        let path       =  'assets/svg/icons/';
        let src        =  '';
        let ext        =  '.svg';
        if(number      == 1 ) src = 'exchange-circle';
        else if(number == 2 ) src = 'arrow-left';
        else src       =  'dot-circle';
        return path + src + ext;
    }
    resourceStatus(number: number, needed: string): string {
        let text      = '';
        let className = '';
        if(number == 1) {
            text      = 'Đã xong';``
            className = 'finished';
        }
        if(number == 2) {
            text      = 'Đã xong <br> (task đột xuất)';
            className = 'prioritize';
        }
        if(number == 3) {
            text      = 'Chưa xong';
            className = 'unfinished';
        }
        if(number == 4) {
            text      = 'Chưa xong <br> (bận task khác) - đã duyệt';
            className = 'unfinished-otherCheck';
        }
        if(number == 5) {
            text      = 'Chưa xong <br> (bận task khác) - chưa duyệt';
            className = 'unfinished-otherUncheck';
        }
        if(number == 6) {
            text      = 'Chưa làm';
            className = 'notReceived';
        }
        if(number == 7) {
            text      = 'Vắng';
            className = 'absent';
        }
        if (needed == 'text') {
            return text;
        }
        return className;
    }

    pinDatas: pinData[] = [
        {description: 'Cần release module nhân sự cho khách hàng ABC', status: 'Xong', name: 'Hoàng Tuấn', dateFinish: '12/09', note: 'Cần kiểm tra dữ liệu cũ',},
        {description: 'Cần release module nhân sự cho khách hàng ABC', status: 'Xong', name: 'Quỳnh Như', dateFinish: '12/10', note: 'Cần kiểm tra dữ liệu cũ',},
        {description: 'Cần release module nhân sự cho khách hàng ABC', status: 'Chưa Xong', name: 'Tuấn Anh', dateFinish: '12/12', note: 'Cần kiểm tra dữ liệu cũ',},
        {description: 'Cần release module nhân sự cho khách hàng ABC', status: 'Chưa Xong', name: 'Trần Tiến', dateFinish: '20/12', note: 'Cần kiểm tra dữ liệu cũ',},
    ];
    workManagementDatas: workManagementData[] = [
        {
            name      : 'Nguyễn Hoàng Tuấn',
            totalTime : 40,
            percentage: 100,
            evaluate  : 'Hiển thị dữ liệu của 2 fields: Lỗi trong tháng + Nhận xét tuần.',
            projects  : [
                {active: 1,module: 'Meeting',url : 'SGD-212',workName: 'Họp công việc team',resource  : 1,workTime: 2,fromDate: '05/07',toDate: '15/07',status: 1,note: 'Triển khai chưa xong',},
                {active: 0,module: 'Module 2',url: 'SGD-212',workName: 'Họp công việc team 2',resource: 2,workTime: 2,fromDate: '05/07',toDate: '15/07',status: 2,note: 'Triển khai chưa xong',},
                {active: 0,module: 'Module 3',url: 'SGD-212',workName: 'Họp công việc team 3',resource: 3,workTime: 2,fromDate: '05/07',toDate: '15/07',status: 3,note: 'Triển khai chưa xong',},
                {active: 1,module: 'Module 4',url: 'SGD-212',workName: 'Họp công việc team 4',resource: 2,workTime: 2,fromDate: '05/07',toDate: '15/07',status: 4,note: 'Triển khai chưa xong',},
                {active: 0,module: 'Module 5',url: 'SGD-212',workName: 'Họp công việc team 5',resource: 3,workTime: 2,fromDate: '05/07',toDate: '15/07',status: 5,note: 'Triển khai chưa xong',},
                {active: 0,module: 'Module 6',url: 'SGD-212',workName: 'Họp công việc team 5',resource: 3,workTime: 2,fromDate: '05/07',toDate: '15/07',status: 6,note: 'Triển khai chưa xong',},
                {active: 0,module: 'Module 7',url: 'SGD-212',workName: 'Họp công việc team 5',resource: 3,workTime: 2,fromDate: '05/07',toDate: '15/07',status: 7,note: 'Triển khai chưa xong',},
            ]
        },
        {
            name      : 'Lê Thị Quỳnh Như',
            totalTime : 40,
            percentage: 90,
            evaluate  : 'Hiển thị dữ liệu của 2 fields: Lỗi trong tháng + Nhận xét tuần',
            projects  : [
                {active: 1,module: 'Meeting',url : 'SGD-212',workName: 'Họp công việc team',resource  : 3,workTime: 2,fromDate: '05/07',toDate: '15/07',status: 1,note: 'Triển khai chưa xong',},
                {active: 1,module: 'Module 2',url: 'SGD-212',workName: 'Họp công việc team 2',resource: 3,workTime: 2,fromDate: '05/07',toDate: '15/07',status: 1,note: 'Triển khai chưa xong',},
                {active: 0,module: 'Module 3',url: 'SGD-212',workName: 'Họp công việc team 3',resource: 3,workTime: 2,fromDate: '05/07',toDate: '15/07',status: 1,note: 'Triển khai chưa xong',},
                {active: 0,module: 'Module 4',url: 'SGD-212',workName: 'Họp công việc team 4',resource: 3,workTime: 2,fromDate: '05/07',toDate: '15/07',status: 1,note: 'Triển khai chưa xong',},
                {active: 0,module: 'Module 5',url: 'SGD-212',workName: 'Họp công việc team 5',resource: 3,workTime: 2,fromDate: '05/07',toDate: '15/07',status: 1,note: 'Triển khai chưa xong',},
            ]
        },
    ];
}