import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  //quand il y a pas de parametre
  { path: '',   redirectTo: 'product', pathMatch: 'full' },
  //pour etre rediriger vers product au lieu du port par défaut
  {path: 'product', component: ProductComponent},
  //route vers detail produit
  {path: 'product/detail-product/:id', component: ProductDetailComponent},
  //quand l'utilisateur tape un chemin qui n'existe pas
  // { path: '**', redirectTo: 'product', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
