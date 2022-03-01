import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-details',
  templateUrl: './header-details.component.html',
  styleUrls: ['./header-details.component.css']
})
export class HeaderDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title = '';
}
