import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostListener("click") toggle(){
    this.isOpen = !this.isOpen;
  }

  @HostBinding("class.open") isOpen: boolean = false;

  constructor() { }
}
