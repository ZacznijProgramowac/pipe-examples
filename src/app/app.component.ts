import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = `PRZYKŁADY PIPE'ÓW`;
  someDate = Date.now();
  words = ['jeden', 'dwa', 'trzy', 'cztery'];
  num = 8.7237823462034243;
  translate = {
    zima: 'winter',
    wiosna: 'spring',
    jesień: 'autumn',
    lato: 'summer',
  };
  price = 2.99;

  constructor(@Inject(LOCALE_ID) private localeId: string) {
    console.log('Locale: ', this.localeId);
  }
}
