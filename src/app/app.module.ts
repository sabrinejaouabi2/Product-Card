import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componenet/navbar/navbar.component';
import { AddProductComponent } from './Componenet/add-product/add-product.component';
import { HomeComponent } from './Componenet/home/home.component';
import { ShowShoppingComponent } from './Componenet/show-shopping/show-shopping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './Componenet/details/details.component';
import { ReactiveFormComponent } from './Componenet/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddProductComponent,
    HomeComponent,
    ShowShoppingComponent,
    DetailsComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
