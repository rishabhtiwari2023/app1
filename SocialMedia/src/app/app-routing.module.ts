import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { CartComponent } from './component/cart/cart.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
   { path: "product", component: AppNavigationComponent
  }
  , { path: "ADDproduct", component: AddProductComponent },
  { path: "cart", component: CartComponent },
 

  { path: "emailVerification", component: EmailVerificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
