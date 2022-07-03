import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MainbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    MainbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
