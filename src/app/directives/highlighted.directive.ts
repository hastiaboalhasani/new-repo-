import { Directive, HostBinding, HostListener, Input, Output } from "@angular/core";
import EventEmitter from "events";

@Directive({
  selector: "[highlighted]",
  standalone: true,
})
export class HighlightedDirective {
  @Input("highlighted")
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();
  constructor() {
    
  }
  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighlighted 
  }

  @HostBinding('attr.disabled')
  get  disabled(){
    return 'true';
  }
  @HostListener('mouseover')
  mouseOver(){
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }
  @HostListener('mouseleave')
  mouseLeave(){
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}
