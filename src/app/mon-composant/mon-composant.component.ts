form: NgForm;

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.scss'],
})
export class MonComposantComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    console.log(form.value.email);
  }
}
