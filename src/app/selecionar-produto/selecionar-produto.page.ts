import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecionar-produto',
  templateUrl: './selecionar-produto.page.html',
  styleUrls: ['./selecionar-produto.page.scss'],
})
export class SelecionarProdutoPage implements OnInit {

  itemSelecionado : String;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  adicionarProduto(){
    this.router.navigate(['adicionar-produto']);
  }

  visualizarProduto(){
    
  }



}
