import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  catSlideShowCompleted = false;
  dogSlideshowCompleted = false;

  constructor(private imgService: ImageService) { }

  ngOnInit() {
    this.imgService.onSlideShowEnd.subscribe((event: any) => {
      if(event.name === 'catSlideshow'){
        this.catSlideShowCompleted = true;
      }
      else if(event.name === 'dogSlideshow'){
        this.dogSlideshowCompleted = true;
      }
    });
  }

}
