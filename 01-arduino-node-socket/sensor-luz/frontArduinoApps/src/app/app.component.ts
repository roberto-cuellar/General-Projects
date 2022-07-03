import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import {BreakpointObserver} from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  @ViewChild('drawer') sidenav!: MatSidenav;

  constructor( private observer: BreakpointObserver){
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.observer.observe(['(min-width: 600px)'])
      .subscribe((res)=>{
        if(res.matches){
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }else{
          this.sidenav.mode = 'over';
          this.sidenav.close();
        }
      })

    //   this.observer.observe(['(min-width: 400px)'])
    //   .subscribe((res)=>{
    //     if(res.matches){
    //       this.sidenav.mode = 'over';
    //       this.sidenav.close();
    //     }else{
    //       this.sidenav.mode = 'side';
    //       this.sidenav.open();
    //     }
    //   })
    

    }


}
