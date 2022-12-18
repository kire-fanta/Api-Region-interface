import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  slideOpts = {
    direction: 'vertical',
    pager: true,
  };
}

import { IonSlides } from '@ionic/angular';


  // Autres méthodes du composant ici



