import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'selecionar-produto',
    pathMatch: 'full'
  },
  {
    path: 'selecionar-produto',
    loadChildren: () => import('./selecionar-produto/selecionar-produto.module').then( m => m.SelecionarProdutoPageModule)
  },
  {
    path: 'adicionar-produto',
    loadChildren: () => import('./adicionar-produto/adicionar-produto.module').then( m => m.AdicionarProdutoPageModule)
  },
  {
    path: 'visualizar-produto',
    loadChildren: () => import('./visualizar-produto/visualizar-produto.module').then( m => m.VisualizarProdutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
