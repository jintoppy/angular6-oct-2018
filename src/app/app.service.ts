import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private users = [
    {
      name: 'abc'
    },
    {
      name: 'def'
    }
  ];


  constructor() { }

  getUsers(){
    return this.users;
  };  
}
