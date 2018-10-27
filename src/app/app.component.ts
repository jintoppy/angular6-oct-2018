import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ImageService } from './image.service';
import { IUser } from './models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: IUser[] = [];    
  catList: string[] = [];
  dogList: string[] = [];

  constructor(
    private service: AppService,
    private imgService: ImageService
  ){
    
  }

  ngOnInit(){
    this.service.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
    });
    this.imgService.getList().subscribe(res => {
      this.catList = res.dogs;
      this.dogList = res.cats;
      //[catList, dogList]
    });
    // this.imgService.getCatList().subscribe(cats => {
    //   this.catList = cats;
    // });
    // this.imgService.getDogList().subscribe(dogs => {
    //   this.dogList = dogs
    // });
  }

  onDogSlideComplete(e){
    console.log(e);
    this.imgService.onSlideShowEnd.next({
      name: 'dogSlideshow'
    });
    // alert('Dog slideshow completed');
  }

  onCatSlideComplete(event){
    console.log(event);
    this.imgService.onSlideShowEnd.next({
      name: 'catSlideshow'
    });
    // alert('Cat slideshow completed');
  }
  
}

//Subject (Observable , Observer)
//Observable - Read  subscribe
//Observer - Write
