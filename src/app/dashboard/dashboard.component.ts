import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private titleService: Title, private title : TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title.title + " - Dashboard");
  }
}