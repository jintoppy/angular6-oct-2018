import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  inputValue = 'initial text';
  myButtonTitle = "This is my button title";

  @Output()
  onEnd: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  myTitle: string;

  constructor() { }

  ngOnInit() {
    this.inputValue = 'changed text';    
  }

  onBtnClick(){
    alert(this.inputValue);
    this.onEnd.emit('asdfasdf');
  }

}
