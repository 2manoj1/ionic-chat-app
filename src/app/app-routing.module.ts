import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'workspaces',
    loadChildren: () => import('./workspaces/workspaces.module').then( m => m.WorkspacesPageModule)
  },
  { path: '', redirectTo: 'workspaces', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
