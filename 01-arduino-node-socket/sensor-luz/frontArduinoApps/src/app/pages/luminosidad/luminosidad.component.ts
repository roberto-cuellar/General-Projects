import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-luminosidad',
  templateUrl: './luminosidad.component.html',
  styleUrls: ['./luminosidad.component.css']
})
export class LuminosidadComponent implements OnInit,AfterViewInit {

  constructor(private _snackBar: MatSnackBar) { 
  }

  ngAfterViewInit(): void {
      this.openSnackBar();
  }

  openSnackBar(){
    this._snackBar.open('Estado de la Conexión','Cerrar');
  }

  ngOnInit(): void {
  }

}
