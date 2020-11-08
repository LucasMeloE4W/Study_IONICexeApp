import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public resultado: String = "";
  public pesquisa: String = "";
  public tituloVariavel: String = "App Estudos";
  public imgVariavel: String = "https://source.unsplash.com/random/200x200";
  
  constructor(private navegacao: NavController){ }

  ngOnInit(){
    
  }

  recuperar(){
    this.recuperar().pesquisa;
  }

  abrirBotoes(){
    this.navegacao.navigateForward('botoes')
  }

  // -------------- !! ------------- \\
  public atualizaDados():void {

    this.tituloVariavel = "Titulo Alterado"
  }

  public acaoBotao():void {

    this.tituloVariavel = "Botão Clicado"
  }
  // -------------- !! ------------- \\

}
