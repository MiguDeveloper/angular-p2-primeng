import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { OrderComponent } from './pages/order/order.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ColorProductPipe } from './pipes/color-product.pipe';

@NgModule({
  declarations: [OrderComponent, ToggleCasePipe, CanFlyPipe, SortByPipe, ColorProductPipe],
  imports: [CommonModule, PrimengModule, ProductsRoutingModule],
})
export class ProductsModule {}
