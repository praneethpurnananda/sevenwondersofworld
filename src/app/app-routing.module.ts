import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreatWallOfChinaComponent } from './great-wall-of-china/great-wall-of-china.component';
import { ChristStatueComponent } from './christ-statue/christ-statue.component';
import { MachuPicchuComponent } from './machu-picchu/machu-picchu.component';
import { TheRomanComponent } from './the-roman/the-roman.component';
import { TajmahalComponent } from './tajmahal/tajmahal.component';

const routes: Routes = [
  {path: 'greatwallofchina' , component: GreatWallOfChinaComponent},
  {path: 'christstatue' , component: ChristStatueComponent},
  {path: 'machupicchu' , component: MachuPicchuComponent},
  {path: 'theroman' , component: TheRomanComponent},
  {path: 'tajmahal' , component: TajmahalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
