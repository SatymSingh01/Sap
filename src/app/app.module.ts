import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule } from 'ngx-pagination';
import { FilternamePipe } from './filtername.pipe';
// import { FilterPipe } from './filter.pipe';
 


@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FilternamePipe,
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    Ng2OrderModule ,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
