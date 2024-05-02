import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    FooterComponent
  ]
})
export class ComponentsModule { }
