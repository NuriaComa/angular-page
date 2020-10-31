import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(theme: string): void  {
    this.document.body.className = theme;
  }
}
