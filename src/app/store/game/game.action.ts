import {GameCreateModel} from "../../model/game/class/game-create.model";

export interface GameStateModel {
  games: Array<GameCreateModel>
}

export class CreateGameAction {
  static readonly type = '[Game] CreateGameAction';
  constructor(public gameModel: GameCreateModel) {
  }
}

export class DeleteGameAction {
  static readonly type = '[Game] DeleteGameAction';
  constructor(public id: string | undefined) {
  }
}

export class CreateGameActionSuccess {
  static readonly type = '[Game] CreateGameActionSuccess'
}

export class CreateGameActionError {
  static readonly type = '[Game] CreateGameActionError'
}

export class DeleteGameActionSuccess {
  static readonly type = '[Game] DeleteGameActionSuccess'
}
