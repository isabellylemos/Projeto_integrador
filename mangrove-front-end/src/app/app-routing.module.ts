import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarCategoriaComponent } from './buscar/buscar-categoria/buscar-categoria.component';
import { BuscarProdutosComponent } from './buscar/buscar-produtos/buscar-produtos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoComponent } from './produto/produto.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  {path:'',redirectTo:'entrar', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'entrar',component:EntrarComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'categoria-edit/:id', component: CategoriaEditComponent},
  {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent},
  {path: 'produto-edit/:id', component: ProdutoEditComponent},
  {path: 'produto',component: ProdutoComponent},
  {path: 'buscar-categoria/:id', component: BuscarCategoriaComponent},
  {path: 'detalhe-produto/', component: DetalheProdutoComponent},
  {path: 'buscar-produtos', component:BuscarProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
