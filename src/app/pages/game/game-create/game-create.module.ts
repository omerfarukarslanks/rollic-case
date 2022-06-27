import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCreateComponent } from './game-create.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: GameCreateComponent,
    data: {header: 'Oyun Oluştur'}
  }
]

@NgModule({
  declarations: [
    GameCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class GameCreateModule { }
