import { Component, OnInit } from '@angular/core';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';

interface groupData {
    week     : string | undefined;
    number   : string | undefined;
    toDate   : string | undefined;
    fromDate : string | undefined;
    time     : string | undefined;
}
interface workingWeekData {
    value   : number;
    month   : string;
    fromDate: string;
    toDate  : string;
    lists   : any;
}
@Component({
    selector: 'app-working-week',
    templateUrl: './working-week.component.html',
    styleUrls: ['./working-week.component.css']
})
export class WorkingWeekComponent implements OnInit {
    constructor(config: NgbModalConfig, public AppComponent: AppComponent) {
        config.size = 'lg';
        config.backdrop = 'static';
        config.keyboard = false;
    }

    ngOnInit(): void { }
    title = 'Tuần làm việc';

    selectedValue: string | undefined;
    groupDatas: groupData[] = [
        {week: 'Tuần 1', number: '1', toDate: '05/07', fromDate: '09/07', time: '42',},
        {week: 'Tuần 2', number: '2', toDate: '12/07', fromDate: '21/07', time: '45',},
        {week: 'Tuần 3', number: '3', toDate: '18/07', fromDate: '28/07', time: '48',},
        {week: 'Tuần 4', number: '4', toDate: '18/08', fromDate: '28/08', time: '42',},
        {week: 'Tuần 5', number: '5', toDate: '18/08', fromDate: '28/08', time: '45',},
        {week: 'Tuần 6', number: '6', toDate: '18/08', fromDate: '28/08', time: '48',},
    ];

    lockIcons(number: number): string {
        let path       =  'assets/svg/icons/';
        let src        =  '';
        let ext        =  '.svg';
        if(number      == 1 ) src = 'lock-detail';
        else src       =  'unlock-detail';
        return path + src + ext;
    }

    workingWeekDatas: workingWeekData[] = [
        {
            value    : 7,
            month    : 'Tháng 7',
            fromDate : '05/07',
            toDate   : '30/07',
            lists    : [
                {week: 'Tuần 1', number: '1', toDate: '05/07', fromDate: '09/07', time: '42', lock: '1',},
                {week: 'Tuần 2', number: '2', toDate: '12/07', fromDate: '21/07', time: '45', lock: '0',},
                {week: 'Tuần 3', number: '3', toDate: '18/07', fromDate: '28/07', time: '48', lock: '0',},
                {week: 'Tuần 4', number: '4', toDate: '18/08', fromDate: '28/08', time: '42', lock: '1',},
            ]
        },
        {
            value    : 8,
            month    : 'Tháng 8',
            fromDate : '05/08',
            toDate   : '30/08',
            lists    : [
                {week: 'Tuần 1', number: '1', toDate: '05/08', fromDate: '09/08', time: '42', lock: '1',},
                {week: 'Tuần 2', number: '2', toDate: '12/08', fromDate: '21/08', time: '45', lock: '0',},
                {week: 'Tuần 3', number: '3', toDate: '18/08', fromDate: '28/08', time: '48', lock: '0',},
                {week: 'Tuần 4', number: '4', toDate: '18/08', fromDate: '28/08', time: '42', lock: '1',},
            ]
        },
        {
            value    : 9,
            month    : 'Tháng 9',
            fromDate : '05/09',
            toDate   : '30/09',
            lists    : [
                {week: 'Tuần 1', number: '1', toDate: '05/09', fromDate: '09/09', time: '42', lock: '1',},
                {week: 'Tuần 2', number: '2', toDate: '12/09', fromDate: '21/09', time: '45', lock: '0',},
                {week: 'Tuần 3', number: '3', toDate: '19/09', fromDate: '29/09', time: '49', lock: '0',},
                {week: 'Tuần 4', number: '4', toDate: '19/09', fromDate: '29/09', time: '42', lock: '1',},
            ]
        },
    ];
}