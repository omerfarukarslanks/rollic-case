import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {HeaderStateModel, SetTitleAction} from "./header.action";

@State<HeaderStateModel>({
  name: 'header',
  defaults: {
    title: ''
  }
})

@Injectable()
export class HeaderState {

  @Selector()
  static getTitleAction(state: HeaderStateModel) {
    return state.title;
  }

  @Action(SetTitleAction)
  setTitleAction(ctx: StateContext<HeaderStateModel>, action: SetTitleAction) {
    return ctx.patchState({title: action.title})
  }
}
