import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[underline]'
})
export class UnderlineDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    // elem.nativeElement.style.textDecoration = 'underline';
    /* renderer set style to any plataform */
    renderer.setStyle(elem.nativeElement, 'textDecoration', 'underline');
    renderer.setStyle(elem.nativeElement, 'color', 'indigo');
  }

}
