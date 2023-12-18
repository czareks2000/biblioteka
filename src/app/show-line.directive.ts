import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowLine]',
})
export class ShowLineDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightRow(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightRow(false);
  }

  private highlightRow(addHighlight: boolean) {
    const className = 'highlighted-row';
    if (addHighlight) {
      this.renderer.addClass(this.el.nativeElement, className);
    } else {
      this.renderer.removeClass(this.el.nativeElement, className);
    }
  }
}
