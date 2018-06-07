import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // 默认指向home 主页
  { path: 'home', component: HomeComponent }, // 指向主页的路由
  { path: 'product/:id', component: ProductDetailComponent } // 指向产品详情的路由
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
