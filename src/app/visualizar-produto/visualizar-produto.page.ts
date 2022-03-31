import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-produto',
  templateUrl: './visualizar-produto.page.html',
  styleUrls: ['./visualizar-produto.page.scss'],
})
export class VisualizarProdutoPage implements OnInit {

  itemSelecionado : string;

  constructor(private actRoute : ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data:any)=>{
      this.itemSelecionado = data.item;
    })
  }

}
