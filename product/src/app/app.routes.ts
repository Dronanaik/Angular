import { Routes } from '@angular/router';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { SearchComponent } from './components/search/search.component';
import { ValidationComponent } from './components/validation/validation.component';
import { ReactiveFromValidationComponent } from './components/reactive-from-validation/reactive-from-validation.component';
import { ParentComponent } from './components/parent/parent.component';

export const routes: Routes = [
    {path:'Addcomponent',component:AddNewProductComponent},
    {path:'ProductSearch',component:SearchComponent},
    {path:'Display',component:DisplayProductsComponent},
    {path:'Update',component:UpdateProductComponent},
    {path:'Delete',component:DeleteProductComponent},
    {path:'Demo',component:DemoComponent},
    {path:'Validation',component:ValidationComponent},
    {path:'ReactiveForm',component:ReactiveFromValidationComponent},
    {path:'parent',component:ParentComponent},
    {path:'',component:AppComponent}

];
