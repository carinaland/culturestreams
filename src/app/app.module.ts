
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, appRoutingComponents } from './app-routing.module';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { NavComponent } from "@features/base/components/nav/nav.component";
import { FooterComponent } from "@features/base/components/footer/footer.component";

@NgModule({
  declarations: [
    appRoutingComponents,
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
