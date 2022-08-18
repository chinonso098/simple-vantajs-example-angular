import { Component, ViewChild, ElementRef, AfterViewInit,  } from '@angular/core';


declare var VANTA;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {

  name = 'Angular';

  constructor() { }
  
   // you can also use OnInit hooks
    ngAfterViewInit(): void {
      VANTA.WAVES({
        el: '#vanta', // element selector string or DOM object reference
        color: 0x000000,
        waveHeight: 20,
        shininess: 50,
        waveSpeed: 1.5,
        zoom: 0.75
      })
    }


  //OR

  // @ViewChild('vanta', { static: true }) vantaEl: ElementRef; 

  // ngAfterViewInit() {
  //   WAVES({el: this.vantaEl.nativeElement})
  // }
}
