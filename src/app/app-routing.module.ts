import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes:Routes = [
/*  1º roteamento  (assim)
  {path:'portfolio/:id', component:CardComponent, pathMatch:'prefix'},
  {path: '**', redirectTo:''}
*/


  //2º roteamento (ou assim)//

  {path:'', component:TitleComponent, pathMatch:'full'},
  {path:'portfolio', component:CardComponent, children:[
    {path:':id', component:CardComponent},
    {path:':id/:token', component:CardComponent},

  ]},


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
