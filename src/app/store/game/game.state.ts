import {
  Action,
  Actions,
  ofAction, ofActionDispatched,
  ofActionErrored,
  ofActionSuccessful,
  Selector,
  State,
  StateContext,
  Store
} from "@ngxs/store";
import {
  CreateGameAction, CreateGameActionError,
  CreateGameActionSuccess,
  DeleteGameAction,
  DeleteGameActionSuccess,
  GameStateModel
} from "./game.action";
import {Injectable} from "@angular/core";
import {GameCreateModel} from "../../model/game/class/game-create.model";
import {ToastrService} from "ngx-toastr";
import {Navigate} from "@ngxs/router-plugin";
import {take} from "rxjs";

@State<GameStateModel>({
  name: 'game',
  defaults: {
    games: []
  }
})

@Injectable()
export class GameState {

  constructor(private toastService: ToastrService,
              private store: Store,
              private action$: Actions) {
  }

  @Selector()
  static getGames(state: GameStateModel) {
    return state.games;
  }

  @Action(CreateGameAction)
  createGameAction(ctx: StateContext<GameStateModel>, action: CreateGameAction) {
    let games = ctx.getState().games as Array<GameCreateModel>;
    const index = games.findIndex((game: GameCreateModel) => game.name === action.gameModel.name);
    if (index !== -1) {
      this.store.dispatch(new CreateGameActionError);
    } else {
      ctx.setState({...ctx.getState(), games: [...ctx.getState().games, ...[action.gameModel]]})
      this.store.dispatch(new CreateGameActionSuccess);
    }
  }

  @Action(DeleteGameAction)
  deleteGameActionById(ctx: StateContext<GameStateModel>, action: DeleteGameAction) {
    let games = ctx.getState().games as Array<GameCreateModel>;
    games = games.filter(game => game.id !== action.id);
    ctx.setState({games});
    this.store.dispatch(new DeleteGameActionSuccess);
  }

  @Action(CreateGameActionSuccess)
  createGameActionSuccess() {
    this.action$.pipe(ofActionSuccessful(CreateGameAction)).subscribe(() => {
      this.toastService.success('Game Created Successfully!', 'Successful');
      this.store.dispatch(new Navigate(['/game/list']));
    });
  }

  @Action(DeleteGameActionSuccess)
  deleteGameActionSuccess() {
    this.action$.pipe(ofActionSuccessful(DeleteGameAction)).subscribe(v => {
      this.toastService.success('Game Deletion Successfully!', 'Successful');
    });
  }

  @Action(CreateGameActionError)
  createGameActionError() {
    this.action$.pipe(ofAction(CreateGameAction), take(1)).subscribe(v => {
      this.toastService.error('Game Create Error!', 'Error');
    });
  }
}
