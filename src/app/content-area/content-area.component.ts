import { Component } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent {
  movieList = [
    {
      title: 'Yenthiran',
      actor: 'Rajnikanth'
    },
    {
      title: 'Gilli',
      actor: 'Vijay'
    },
    {
      title: 'Bhima',
      actor: 'Vikram'
    }
  ];
  constructor() { }

}