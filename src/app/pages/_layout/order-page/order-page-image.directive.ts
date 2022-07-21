import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOrderPageImage]'
})
export class OrderPageImageDirective {

  constructor(private element: ElementRef) { }
  @HostListener('click')
  imageChange() {
    const src :any = this.element.nativeElement.src;
    const pre : any =   document.getElementById("preview");
    pre.src = src;
    const imageSlide = document.getElementsByClassName("container__img-slide");
    for(let i=0; i<imageSlide.length;i++){
      imageSlide[i].classList.remove("active");
    }
    this.element.nativeElement.parentElement.classList.add("active");
    
  }
}
