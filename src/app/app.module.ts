import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

// Angular 应用是模块化的，它拥有自己的模块化系统，称作 NgModule。
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    ProductDetailComponent,
    HomeComponent,
    StarsComponent,
  ],
  imports: [
    // 浏览器模块
    BrowserModule,
    // ngModel 需要 引用 Formsmodule 模块
    FormsModule,
    // 路由模块
    AppRoutingModule,
    // httpClient 用来发送请求，获取服务端数据
    HttpClientModule,
    // web api 一个本地的web服务器
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
