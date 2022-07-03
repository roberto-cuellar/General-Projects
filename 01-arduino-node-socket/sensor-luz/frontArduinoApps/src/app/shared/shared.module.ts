import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    MainbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModulesModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    MainbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
