import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Actions, ofActionSuccessful, Store} from "@ngxs/store";
import {GameListModel} from "../../../model/game/class/game-list.model";
import {GameState} from "../../../store/game/game.state";
import {DeleteGameAction} from "../../../store/game/game.action";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameListComponent implements OnInit, OnDestroy {

  title?: string;
  gameList?: Array<GameListModel> = [];
  private ngUnsubscribe = new Subject();
  searchString = '';

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store,
              private actions$: Actions) {
  }


  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.data['header'];
    this.getAllGameList()
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next('');
    this.ngUnsubscribe.complete();
  }

  deleteGame(id: string | undefined) {
    this.store.dispatch(new DeleteGameAction(id));
    this.getAllGameList();
    // this.actions$.pipe(ofActionSuccessful(DeleteGameAction), takeUntil(this.ngUnsubscribe)).subscribe(() => this.getAllGameList());
  }

  getAllGameList() {
    this.gameList = this.store.selectSnapshot(GameState.getGames);
  }
}
