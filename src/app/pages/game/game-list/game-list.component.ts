import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngxs/store";
import {GameListModel} from "../../../model/game/class/game-list.model";
import {GameState} from "../../../store/game/game.state";
import {DeleteGameAction} from "../../../store/game/game.action";
import {Observable} from "rxjs";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameListComponent implements OnInit {

  title?: string;
  gameList?: Array<GameListModel> = [];
  searchString = '';

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store) {
  }


  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.data['header'];
    this.getAllGameList().subscribe(games => {
      this.gameList = games;
    })
  }

  deleteGame(id: string | undefined) {
    this.store.dispatch(new DeleteGameAction(id));
  }

  getAllGameList(): Observable<any> {
    return this.store.select(GameState.getGames);
  }
}
