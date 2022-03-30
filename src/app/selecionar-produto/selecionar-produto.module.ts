import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionarProdutoPageRoutingModule } from './selecionar-produto-routing.module';

import { SelecionarProdutoPage } from './selecionar-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionarProdutoPageRoutingModule
  ],
  declarations: [SelecionarProdutoPage]
})
export class SelecionarProdutoPageModule {}
