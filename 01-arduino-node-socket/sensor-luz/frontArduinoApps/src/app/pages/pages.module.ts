import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuminosidadComponent } from './luminosidad/luminosidad.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { VigilanciaComponent } from './vigilancia/vigilancia.component';
import { LuminosidadTutorialComponent } from './luminosidad-tutorial/luminosidad-tutorial.component';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [
    LuminosidadComponent,
    TemperaturaComponent,
    VigilanciaComponent,
    LuminosidadTutorialComponent
  ],
  imports: [
    CommonModule,
    MaterialModulesModule,
    ComponentsModule
  ],
  exports: [
    LuminosidadComponent,
    TemperaturaComponent,
    VigilanciaComponent,
    LuminosidadTutorialComponent
  ]
})
export class PagesModule { }
