import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menus = [
    {
      id:'1',
      name: 'Teste Audaces',
      routerLink:"['/home']"
    },
    {
      id:'2',
      name: 'Exemplo 1',
      routerLink:''
    },
    {
      id:'3',
      name: 'Exemplo 2',
      routerLink:''
    },
    {
      id:'3',
      name: 'Exemplo 3',
      routerLink:''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
