import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalModificarPageRoutingModule } from './modal-modificar-routing.module';

import { ModalModificarPage } from './modal-modificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalModificarPageRoutingModule
  ],
  declarations: [ModalModificarPage]
})
export class ModalModificarPageModule {}
