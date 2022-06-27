import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameListComponent} from './game-list.component';
import {RouterModule, Routes} from "@angular/router";
import {FilterPipe} from "../../../pipe/filter/filter.pipe";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: GameListComponent,
    data: {header: 'Oyun Listesi'}
  }
]

@NgModule({
  declarations: [
    GameListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class GameListModule {
}
