import {Routes} from "@angular/router";

export const gameRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    loadChildren: () => import('./game-list/game-list.module').then(m => m.GameListModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./game-create/game-create.module').then(m => m.GameCreateModule)
  }
]
