import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { OneProductComponent } from './one-product/one-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'productlisting',
    component: ProductlistingComponent
  },
  {
    path: 'oneProduct',
    component: OneProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
