import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxsModule} from "@ngxs/store";
import {DEVTOOLS_REDUX_CONFIG, OPTIONS_CONFIG, STATES_MODULES, STORAGE_MODULES} from "./store.config";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot(STATES_MODULES, OPTIONS_CONFIG),
    NgxsReduxDevtoolsPluginModule.forRoot(DEVTOOLS_REDUX_CONFIG),
    NgxsStoragePluginModule.forRoot(STORAGE_MODULES)
  ]
})
export class StoreModule { }
