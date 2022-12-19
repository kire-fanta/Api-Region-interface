import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nom-du-composant',
  templateUrl: './nom-du-composant.component.html',
  styleUrls: ['./nom-du-composant.component.scss'],
})
export class NomDuComposantComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    console.log(form.value.email);
  }
}
form: NgForm;





