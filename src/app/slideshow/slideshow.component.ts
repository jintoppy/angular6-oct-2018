import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  activeIndex = 0;
  isButtonDisabled = false;
  constructor() { }

  @Input()
  list: string[];

  @Output()
  onEnd: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  onForwardButtonClick(){
    this.activeIndex = this.activeIndex +1;
    if(this.activeIndex === this.list.length -1){
      this.isButtonDisabled = true;
      this.onEnd.emit('completed');
    }
  }

}
