import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    public onSlideShowEnd: Subject<object> = new Subject<object>();
    constructor(private http: HttpClient){}
    getList(){
        const cats$ = this.http.get<string[]>('/assets/data/cats.json');
        const dog$ = this.http.get<string[]>('/assets/data/dogs.json');
        const output$ = combineLatest(cats$, dog$);
        return output$
                .pipe(
                    map(res => ({
                            cats: res[0],
                            dogs: res[1]
                        })
                    )
                );
    }
    getCatList(): Observable<string[]>{
        return this.http.get<string[]>('/assets/data/cats.json');
    }

    getDogList(): Observable<string[]>{
        return this.http.get<string[]>('/assets/data/dogs.json');
    }
}