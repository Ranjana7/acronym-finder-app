import { Component } from '@angular/core';
import {AcronymService} from './acronyms/acronym.service';

@Component({
  selector: 'af-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AcronymService]
})
export class AppComponent {
  pageTitle: string = 'EBaT Acronym Finder';
}
