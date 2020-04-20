import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductComponent } from './Components/product/product.component';
import { StoreModule } from '@ngrx/store';
import { AppReducers} from './redux/app.reducer';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home/home/home.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "product/:id",
    component: ProductComponent,
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [ProductsComponent, CartComponent, ProductComponent],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot(AppReducers),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}