import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    a{
      display: block;
    }

    .active{
      background-color: gray;
    }
    
    `
  ]
})
export class SidebarComponent implements OnInit {

  @ViewChild('acordion') acordion!: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
