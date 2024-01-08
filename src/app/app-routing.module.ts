import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Componenet/add-product/add-product.component';
import { HomeComponent } from './Componenet/home/home.component';
import { ShowShoppingComponent } from './Componenet/show-shopping/show-shopping.component';
import { DetailsComponent } from './Componenet/details/details.component';
import { ReactiveFormComponent } from './Componenet/reactive-form/reactive-form.component';

const routes: Routes = [

  {path:'add',component:AddProductComponent},
  {path:'home',component:HomeComponent},
  {path:'ShopingCard',component:ShowShoppingComponent},
  {path: 'details/:id',component:DetailsComponent},
  {path:'formractive',component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
