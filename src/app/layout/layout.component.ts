import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) {
  }

  options = this.formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  ngOnInit(): void {
  }

}
