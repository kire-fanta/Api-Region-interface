import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'connexion',
    loadChildren: () =>
      import('./connexion/connexion.module').then((m) => m.ConnexionPageModule),
  },
  {
    path: 'accueil',
    loadChildren: () =>
      import('./accueil/accueil.module').then((m) => m.AccueilPageModule),
  },  {
    path: 'd-regions',
    loadChildren: () => import('./d-regions/d-regions.module').then( m => m.DRegionsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
