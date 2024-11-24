import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductSelectedComponent } from './components/product-selected/product-selected.component';
import { IntranetComponent } from './components/intranet/intranet.component';
import { ExtranetComponent } from './components/extranet/extranet.component';
import { LoginComponent } from './components/login/login.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { FlistComponent } from './components/flist/flist.component';
import { FaddComponent } from './components/fadd/fadd.component';
import { authGuard } from './guards/auth.guard';
import { FformComponent } from './components/fform/fform.component';


export const routes: Routes = [
    {path:"",title:"",component:IntranetComponent,children:[
        {path:"home",title:"HOME",component:HomeComponent},
        {path:"products",title:"PRODUCTS",component:ProductListComponent},
        {path:"products/:id",title:"PRODUCT",component:ProductSelectedComponent},
        {path:"",redirectTo:"/home",pathMatch:"full"},
    ]},
    {path:"extranet",title:"",component:ExtranetComponent,children:[
        {path:"login",title:"login",component:LoginComponent},
        {path:"fournisseur",title:"espace Fournissuer",component:FournisseurComponent,children:[
            {path:"flist",title:"List",component:FlistComponent},
            {path:"flist/:id",title:"List",component:FformComponent},
            {path:"fadd",title:"ADD",component:FaddComponent},
            {path:"",redirectTo:"flist",pathMatch:"full"},
        ],canActivate:[authGuard]},
        {path:"",redirectTo:"login",pathMatch:"full"},
    ]},
    {path:"**",title:"ERROR404",component:ErrorComponent}

];
