import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.page.html',
  styleUrls: ['./adicionar-produto.page.scss'],
})
export class AdicionarProdutoPage implements OnInit {

  nome : string;

  constructor(private router : Router, private toast : ToastController) { }

  ngOnInit() {
  }

  cadastrar(){
    this.router.navigate(['selecionar-produto']);
  }

  async mensagem(msg,duration,color) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration,
      color: color
    });
    toast.present();
  }

}
