import { ShowLineDirective } from './show-line.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('ShowLineDirective', () => {
  it('should create an instance', () => {
    const elMock = {} as ElementRef;
    const refMock = {} as Renderer2;
    const directive = new ShowLineDirective(elMock, refMock);

    expect(directive).toBeTruthy();
  });
});
