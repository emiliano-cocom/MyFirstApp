import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[underline]'
})
export class UnderlineDirective {

  @HostBinding('class') isHover: string; 

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    // elem.nativeElement.style.textDecoration = 'underline';
    /* renderer set style to any plataform */
    this.renderer.setStyle(this.elem.nativeElement, 'textDecoration', 'underline');
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
  }

  @HostListener('mouseover') onHover() {
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'green');
    this.isHover = 'hover';
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
    this.isHover = 'noHover';
  }

}
