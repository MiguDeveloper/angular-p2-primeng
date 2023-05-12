import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './modules/primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './modules/ventas/ventas.module';
import { LOCALE_ID } from '@angular/core';
import '@angular/common/locales/global/es';
import '@angular/common/locales/global/fr';
import { ProductsModule } from './modules/products/products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    PrimengModule,
    VentasModule,
    ProductsModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
