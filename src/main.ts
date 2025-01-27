import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideAnimationsAsync(), provideAnimationsAsync()]
}).catch((err) => console.error(err));
