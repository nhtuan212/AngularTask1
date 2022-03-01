import { Component, OnInit, ViewChild } from '@angular/core';
import { Task, tasks } from './data';

@Component({
  selector: 'app-grantt-charts',
  templateUrl: './grantt-charts.component.html',
  styleUrls: ['./grantt-charts.component.css']
})

export class GranttChartsComponent implements OnInit {
    public ngOnInit(){}
    constructor(){}
    title = 'Phân bổ công việc';
    public data: Task[] = tasks;

    public taskClass(completed: Task) {
        let className = 'dangerPercent';
        if(completed.completionRatio >= 0.8) {
            className = 'primaryPercent';
        };
        if(completed.completionRatio >= 0.5 && completed.completionRatio < 0.8) {
            className = 'warningPercent';
        };
        return className;
    }
    public getCompletionPercentageText(task: Task): string {
        return `${Math.round(task.completionRatio * 100)}%`;
    }
}