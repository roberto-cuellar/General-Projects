import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styles: [
  ]
})
export class MainbarComponent implements OnInit {

  @Input('showSidebar') showSidebar !: boolean;
  @Input('sidebarMode') sidebarMode !: string;
  @Output() ocultarSidebar: EventEmitter<boolean> = new EventEmitter();

  toggleSidebar(){
    this.ocultarSidebar.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
