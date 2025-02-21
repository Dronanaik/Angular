import { Routes } from '@angular/router';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'Addcomponent',component:AddNewProductComponent},
    {path:'Display',component:DisplayProductsComponent},
    {path:'Update',component:UpdateProductComponent},
    {path:'Delete',component:DeleteProductComponent},
    {path:'',component:AppComponent}

];
