import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { appRoutesProvider } from './app/app.routes'; //.ts automatically works itself out for us.


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [appRoutesProvider])
  .catch(err => console.log(err));
