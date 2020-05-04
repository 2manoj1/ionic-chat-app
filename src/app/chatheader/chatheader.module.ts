import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ChatheaderComponent } from './chatheader.component';


@NgModule({
  imports: [ CommonModule, IonicModule],
  declarations: [ChatheaderComponent],
  exports: [ChatheaderComponent]
})
export class ChatheaderComponentModule {}
