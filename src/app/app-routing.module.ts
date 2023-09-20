import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { MedicineHomeComponent } from './component/medicine-home/medicine-home.component';
import { ViewProductDetailsComponent } from './component/view-product-details/view-product-details.component';
import { ViewProductDetailsCategoryComponent } from './component/view-product-details-category/view-product-details-category.component';

const routes: Routes = [
  {path:"homepage",component:HomePageComponent},
  {path:"medicine",component:MedicineHomeComponent},
  {path:'view-product-details/:drug-code',component:ViewProductDetailsComponent},
  {path:'view-top-details-by-category',component:ViewProductDetailsCategoryComponent},
  {path:"",redirectTo:'/homepage',pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
