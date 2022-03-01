import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-home',
    templateUrl: './login-home.component.html',
    styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }
    showNavigationArrows = false;
    showNavigationIndicators = false;
    images = [1, 2, 3].map((n) => `assets/svg/slick/slick-${n}.svg`);

    redirect($myLink?: any): void {
        const navigationDetails: string[] = [];
        if($myLink.length) {
            navigationDetails.push($myLink);
        }
        // this.router.navigate([`${$myLink}`]);
        this.router.navigate(navigationDetails);
    }
}
