import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkspacesPage } from './workspaces.page';
import { ChatsPage } from './chats/chats.page';

const routes: Routes = [
  {
    path: '',
    component: WorkspacesPage,
    children: [
      {
        path: ":workspaceId",
        loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
      },
      {
        path: '',
        redirectTo: '/workspaces',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/workspaces',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspacesPageRoutingModule {}
