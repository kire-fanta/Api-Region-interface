import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DRegionsPageRoutingModule } from './d-regions-routing.module';

import { DRegionsPage } from './d-regions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DRegionsPageRoutingModule
  ],
  declarations: [DRegionsPage]
})
export class DRegionsPageModule {}
