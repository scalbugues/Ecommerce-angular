import { Component, OnInit, Input } from '@angular/core';
import { IngressoModel } from './ingresso.model';

@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.scss']
})
export class IngressoComponent implements OnInit {
  
 ingresso: IngressoModel = new IngressoModel ();

 filmes = ['','Clube da Luta', 'Titanic', 'Teoria de Tudo']
 Sessão = ['20h', '22h']

  constructor () {}

  ngOnInit(): void {

  }

  Comprar(event: any){
  console.log('Evento:' , event);
  console.log('Ingresso:', this.ingresso); 

  alert('Compra realizada com sucesso!');
 } 

}
