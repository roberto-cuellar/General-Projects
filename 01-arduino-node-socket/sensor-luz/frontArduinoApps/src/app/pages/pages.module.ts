import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuminosidadComponent } from './luminosidad/luminosidad.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { VigilanciaComponent } from './vigilancia/vigilancia.component';
import { LuminosidadTutorialComponent } from './luminosidad-tutorial/luminosidad-tutorial.component';



@NgModule({
  declarations: [
    LuminosidadComponent,
    TemperaturaComponent,
    VigilanciaComponent,
    LuminosidadTutorialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LuminosidadComponent,
    TemperaturaComponent,
    VigilanciaComponent,
    LuminosidadTutorialComponent
  ]
})
export class PagesModule { }
