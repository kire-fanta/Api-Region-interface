import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilPageRoutingModule } from './accueil-routing.module';

import { AccueilPage } from './accueil.page';
import { MonComposantComponent } from "../mon-composant/mon-composant.component";





@NgModule({
    declarations: [AccueilPage,MonComposantComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AccueilPageRoutingModule,
        
    ]
})
export class AccueilPageModule {}

