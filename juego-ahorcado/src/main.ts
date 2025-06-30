import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { appRouting } from './app/app.routes';

bootstrapApplication(App, {
  providers: [appRouting]
});
