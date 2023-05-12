import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './modules/ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './modules/ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './modules/ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './modules/ventas/pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full',
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent,
  },
  {
    path: 'ordenar',
    component: OrdenarComponent,
  },
  {
    path: 'personalizados',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
