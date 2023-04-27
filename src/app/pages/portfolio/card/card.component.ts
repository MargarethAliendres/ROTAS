import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router

  ){
    http://localhost:4200/portfolio/2
       this.parametrizador.params.subscribe(res =>      //recupera o resultado da url do ID
      console.log(res));

      http://localhost:4200/portfolio/2?annnnnn=masdfa
     this.parametrizador.queryParams.subscribe(res =>  //recupera o reusultado da query da url
      console.log(res));

    //esse abaixo é o mesmo que o de cima , só que o de cima é o 1º roteamento e o de baixo se escolher o 2º roteamento no caso da queryParams
    http://localhost:4200/portfolio/2?annnnnn=masdfa
      this.parametrizador.firstChild?.params.subscribe(res =>  //recupera o resultado da query da url
      console.log(res));   //informa que esta pegando o parametro do componente filho

}

  ngOnInit(): void {
    /*
   setInterval(()=>{
    this.navegador.navigate(['/'])
  }, 5000)
 */

  }

}

