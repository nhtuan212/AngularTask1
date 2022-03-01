import { Component, OnInit } from '@angular/core';

interface reportData {
    number  : string;
    name    : string;
    finished: number;
    kind    : string;
    comment : string;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],

})
export class ReportComponent implements OnInit {
    constructor() {}
    ngOnInit() {}

    type = 'bar';
    data = {
        labels: ["Hoàng Tuấn", "Quỳnh Như", "Tuấn Anh", "Trần Tiến",],
        datasets: [
            {
                label: "Giờ làm",
                data: [160, 168, 150, 155],
                // borderColor:'#4BB7FF',
                // borderWidth: 1,
                backgroundColor:'#FEB968'
            },
            {
                label: "% Hoàn thành",
                data: [80, 95, 78, 80],
                // borderColor:'#FFD36C',
                // borderWidth: 1,
                backgroundColor:'#E6EBA8'
            }
        ],
    };
    options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                }
            }]
        },
        plugins: {
            labels: {
                render: 'value',
            }
        },
    };

    title = "Báo cáo hiệu suất công việc tháng";
    
    finishedActive(percent: number): string {
        if(percent >= 80 ) return 'bg-success';
        if(percent > 30 && percent < 80 ) return 'bg-danger';
        return 'bg-warning';
    }

    reportDatas: reportData[] = [
        {number: '1', name: 'Hoàng Tuấn', finished: 85, kind: 'A', comment: 'Đúng tiến độ',},
        {number: '1', name: 'Quỳnh Như', finished: 60, kind: 'B', comment: 'Đúng tiến độ, nhưng còn một số lỗi',},
        {number: '1', name: 'Tuấn Anh', finished: 30, kind: 'C', comment: 'Chưa cẩn thận, cần test kỹ trước khi bàn giao',},
    ];
}
