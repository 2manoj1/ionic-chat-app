import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkspacesPageRoutingModule } from './workspaces-routing.module';

import { WorkspacesPage } from './workspaces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkspacesPageRoutingModule
  ],
  declarations: [WorkspacesPage]
})
export class WorkspacesPageModule {}
