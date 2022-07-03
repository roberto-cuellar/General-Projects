import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LuminosidadComponent } from './pages/luminosidad/luminosidad.component';
import { TemperaturaComponent } from './pages/temperatura/temperatura.component';
import { VigilanciaComponent } from './pages/vigilancia/vigilancia.component';

const routes: Routes = [
    {
        path: '',
        component: LuminosidadComponent,
        pathMatch: 'full'
    },
    {
        path: 'temperatura',
        component: TemperaturaComponent
    },
    {
        path: 'vigilancia',
        component: VigilanciaComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}