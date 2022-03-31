import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.page.html',
  styleUrls: ['./adicionar-produto.page.scss'],
})
export class AdicionarProdutoPage implements OnInit {

  nome : string;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  cadastrar(){
    this.router.navigate(['selecionar-produto']);
  }

}
