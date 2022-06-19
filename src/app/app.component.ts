import { ThemesService } from './core/services/themes.service';
import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef,
    private theme: ThemesService) {

  }
  ngAfterViewInit() {

    let tema = localStorage.getItem('thema');
    if(tema =='theme-escuro'){
      this.theme.enableDark();
      this.theme.removeClaro();
    }else{
      localStorage.setItem('thema', 'theme-normal');
      this.theme.enableClaro();
      this.theme.removeDark();
    }
  }
}

