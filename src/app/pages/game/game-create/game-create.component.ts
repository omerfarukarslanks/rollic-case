import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngxs/store";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CreateGameForm} from "../../../model/game/interface/create-game-form";
import {CreateGameAction} from "../../../store/game/game.action";
import {RandomIdUtil} from "../../../util/random-id.util";

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameCreateComponent implements OnInit {

  title?: string;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store,
              private formBuilder: FormBuilder) {
  }

  createGameForm = this.formBuilder.group<CreateGameForm>({
    name: new FormControl('', {nonNullable: true, validators:Validators.required}),
    bundle: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.pattern('^([A-Za-z]{1}[A-Za-z\\d_]*\\.)+[A-Za-z][A-Za-z\\d_]*$')]}),
    owner: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
    icon: new FormControl('', {nonNullable: true, validators:Validators.required}),
    id: new FormControl(RandomIdUtil.generateId(5), {nonNullable: true, validators: Validators.required})
  });

  get name(): FormControl {
    return this.createGameForm.get('name')! as FormControl;
  }

  get bundle(): FormControl {
    return this.createGameForm.get('bundle')! as FormControl;
  }

  get owner(): FormControl {
    return this.createGameForm.get('owner')! as FormControl;
  }

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.data['header'];
  }

  createGame() {
    this.submitted = true;
    if(this.createGameForm.valid) {
      this.store.dispatch(new CreateGameAction(this.createGameForm.value));
    }
  }

  selectedIcon(event: any) {
    this.getBase64(event?.target?.files[0]);
  }

  getBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.createGameForm.patchValue({icon: reader.result as string})
    };
  }
}
