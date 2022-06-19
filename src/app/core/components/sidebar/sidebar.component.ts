
import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


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
