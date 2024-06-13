import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app-config/app.config';
import { AppComponent } from './app/app-config/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
