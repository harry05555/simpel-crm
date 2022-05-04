import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title = this.titleService.getTitle();
  constructor(private titleService: Title) { }
}