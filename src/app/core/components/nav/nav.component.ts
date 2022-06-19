import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private theme: ThemesService) { }

  ngOnInit(): void {
  }

  trocarTema() {
    let tema = localStorage.getItem('thema');
    if (tema == 'theme-escuro') {
      this.theme.enableClaro();
      this.theme.removeDark();
      localStorage.setItem('thema', 'theme-claro');
    } else {
      this.theme.enableDark();
      this.theme.enableClaro();
      localStorage.setItem('thema', 'theme-escuro');
    }

  }
}
