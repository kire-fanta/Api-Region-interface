import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DRegionsPage } from './d-regions.page';

const routes: Routes = [
  {
    path: '',
    component: DRegionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DRegionsPageRoutingModule {}
