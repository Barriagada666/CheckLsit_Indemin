import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalModificarPage } from './modal-modificar.page';

const routes: Routes = [
  {
    path: '',
    component: ModalModificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalModificarPageRoutingModule {}
