import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  @Input() appColor: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.color = this.appColor;
  }

}
