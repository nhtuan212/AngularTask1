import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { MaterialExampleModule } from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { FooterComponent } from './footer/footer.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectCategoriesComponent } from './project-categories/project-categories.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { HeaderDetailsComponent } from './header-details/header-details.component';
import { WorkingScheduleComponent } from './working-schedule/working-schedule.component';
import { WorkingWeekComponent } from './working-week/working-week.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkManagementComponent } from './work-management/work-management.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ReportComponent } from './report/report.component';
import { UserComponent } from './user/user.component';
import { GranttChartsComponent } from './grantt-charts/grantt-charts.component';

import { ChartModule } from 'angular2-chartjs';
import { GanttModule } from "@progress/kendo-angular-gantt";
import 'chartjs-plugin-labels';

const routes: Routes = [
    { path: '', component: LoginHomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'project-categories', component: ProjectCategoriesComponent },
    { path: 'working-schedule', component: WorkingScheduleComponent },
    { path: 'working-week', component: WorkingWeekComponent },
    { path: 'work-management', component: WorkManagementComponent },
    { path: 'todolist', component: TodolistComponent },
    { path: 'report', component: ReportComponent },
    { path: 'user', component: UserComponent },
    { path: 'grantt-charts', component: GranttChartsComponent },
]
@NgModule({
    declarations: [
        AppComponent,
        LoginHomeComponent,
        FooterComponent,
        ProjectsComponent,
        ProjectDetailsComponent,
        ProjectCategoriesComponent,
        MenuDetailsComponent,
        HeaderDetailsComponent,
        WorkingScheduleComponent,
        WorkingWeekComponent,
        WorkManagementComponent,
        TodolistComponent,
        ReportComponent,
        UserComponent,
        GranttChartsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        MaterialExampleModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        ChartModule,
        GanttModule,
    ],
    providers: [NgbActiveModal],
    bootstrap: [AppComponent]
})
export class AppModule {}