import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective implements AfterViewInit, OnChanges {
  constructor(private elRef: ElementRef) {}

  @Input('appTooltip') tooltipContent!: string;
  public tippyInstance?: any;

  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.elRef.nativeElement, {
      content: this.tooltipContent,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tooltipContent']) {
      // input content has changed
      this.updateTooltipContent();
    }
  }

  updateTooltipContent() {
    if (this.tippyInstance) {
      this.tippyInstance.setContent(this.tooltipContent);
    }
  }
}
