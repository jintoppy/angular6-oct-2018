import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ImageService } from './image.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: object[] = [];
  catList: string[] = [];
  dogList: string[] = [];

  onCatSlideComplete(event){
    console.log(event);
    alert('Cat slideshow completed');
  }

  constructor(
    private service: AppService,
    private imgService: ImageService
  ){
    
  }

  ngOnInit(){
    this.users = this.service.getUsers();
    this.catList = this.imgService.getCatList();
    this.dogList = this.imgService.getDogList();
  }

  onDogSlideComplete(e){
    console.log(e);
    alert('Dog slideshow completed');
  }
  
}
