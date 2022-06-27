import {NgxsDevtoolsOptions} from "@ngxs/devtools-plugin";
import {environment} from "../../environments/environment";
import {NgxsConfig} from "@ngxs/store/src/symbols";
import {HeaderState} from "./header/header.state";
import {GameState} from "./game/game.state";

export const STATES_MODULES = [HeaderState, GameState];

export const STORAGE_MODULES = {key: 'game'};

export const OPTIONS_CONFIG: Partial<NgxsConfig> = {
  /**
   * Run in development mode. This will add additional debugging features:
   * - Object.freeze on the state and actions to guarantee immutability
   * import { environment } from '@env';
   * developmentMode: !environment.production
   */
  developmentMode: !environment.production,
};

export const DEVTOOLS_REDUX_CONFIG: NgxsDevtoolsOptions = {
  /**
   * Whether the dev tools is enabled or note. Useful for setting during production.
   * import { environment } from '@env';
   * disabled: environment.production
   */
  disabled: environment.production,
};
