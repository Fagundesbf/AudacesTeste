import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  renderer: Renderer2

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  enableDark(){
    this.renderer.addClass(this.document.body, 'dark-theme');
  }
  removeDark(){
    this.renderer.removeClass(this.document.body, 'dark-theme');
  }
  enableClaro(){
    this.renderer.addClass(this.document.body, 'theme-normal');
  }
  removeClaro(){
    this.renderer.removeClass(this.document.body, 'theme-normal');
  }

}
