import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-schedule',
  templateUrl: './working-schedule.component.html',
  styleUrls: ['./working-schedule.component.css']
})
export class WorkingScheduleComponent implements OnInit {

    constructor() {}
    ngOnInit(): void {}

    type = 'bar';
    data = {
        labels: ["Hoàng Tuấn", "Quỳnh Như", "Tuấn Anh", "Trần Tiến",],
        datasets: [
            {
                label: "% tiến độ hoàn thành",
                data: [80, 60, 45, 70],
                backgroundColor: [
                    '#8574EF',
                    '#FFCB10',
                    '#23C195',
                    '#FEBCD9',
                    '#62CFF3',
                    '#E8E84D',
                    '#93C47D',
                ],
                barPercentage: 0.5,
                barThickness: 50, // bar Width
                maxBarThickness: 50, // bar maxWidth
                minBarLength: 2, // bar length px
                // borderColor:'#4BB7FF',
                // borderWidth: 1,
            },
        ],
    };
    options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    min: 0,
                }
            }]
        },
        plugins: {
            labels: {
                // render: 'value',
                render: function (args) {  
                    return Math.round(args.value * 100 / 100) + "%";
                }
            },
        },
        title: {
            display: true,
            text: 'Mức độ hoàn thành công việc',
        }
    };

    title = 'Tiến độ công việc tuần';
}
