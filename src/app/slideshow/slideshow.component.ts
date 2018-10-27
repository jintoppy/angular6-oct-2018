import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
interface IMyEventProps{
  timeOfCompletetion: Date;
  lastItemUrl: string;
}
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
  onSlideEnd: EventEmitter<IMyEventProps> = new EventEmitter<IMyEventProps>();

  ngOnInit() {
  }

  onForwardButtonClick(){
    this.activeIndex = this.activeIndex +1;
    if(this.activeIndex === this.list.length -1){
      this.isButtonDisabled = true;
      const eventProps: IMyEventProps = {
        timeOfCompletetion: new Date(),
        lastItemUrl: this.list[this.activeIndex]
      };
      this.onSlideEnd.emit(eventProps);
    }
  }

}
