import {FormControl} from "@angular/forms";

export interface CreateGameForm {
  name: FormControl<string>;
  bundle: FormControl<string>;
  owner: FormControl<string>;
  icon: FormControl<string>;
  id: FormControl<string>;
}
