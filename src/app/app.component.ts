import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translateService: TranslateService) {
    translateService.addLangs(['de', 'fr']);
    translateService.setDefaultLang('de');

    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/de|fr/) ? browserLang : 'de');
  }
}
