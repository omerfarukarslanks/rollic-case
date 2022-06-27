import {Action, Selector, State, StateContext} from "@ngxs/store";
import {CreateGameAction, DeleteGameAction, GameStateModel} from "./game.action";
import {Injectable} from "@angular/core";
import {GameCreateModel} from "../../model/game/class/game-create.model";
import {ToastrService} from "ngx-toastr";

@State<GameStateModel>({
  name: 'game',
  defaults: {
    games: []
  }
})

@Injectable()
export class GameState {

  constructor(private toastService: ToastrService) {
  }

  @Selector()
  static getGames(state: GameStateModel) {
    return state.games;
  }

  @Action(CreateGameAction)
  createGameAction(ctx: StateContext<GameStateModel>, action: CreateGameAction) {
    ctx.setState({...ctx.getState(), games: [...ctx.getState().games, ...[action.gameModel]]})
  }

  @Action(DeleteGameAction)
  deleteGameActionById(ctx: StateContext<GameStateModel>, action: DeleteGameAction) {
    let games = ctx.getState().games as Array<GameCreateModel>;
    games = games.filter(game => game.id !== action.id);
    ctx.setState({games});
  }
}
