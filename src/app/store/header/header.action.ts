export interface HeaderStateModel {
  title: string | undefined;
}

export class SetTitleAction {
  static readonly type = '[Header] Title';

  constructor(public title: string) {
  }
}


