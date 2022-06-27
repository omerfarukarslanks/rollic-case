import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {gameRoute} from "./game.route";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(gameRoute)
  ]
})
export class GameModule { }
