import { Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    private catList: string[] = [
        'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
        'https://cdn-images-1.medium.com/max/1600/1*mONNI1lG9VuiqovpnYqicA.jpeg',
        'https://peopledotcom.files.wordpress.com/2018/02/two-tone-cat.jpg'
    ];

    private dogList: string[] = [
        'https://www.rspcansw.org.au/wp-content/uploads/2017/08/50_a-feature_dogs-and-puppies_mobile.jpg',
        'https://i.kinja-img.com/gawker-media/image/upload/s--WFkXeene--/c_scale,f_auto,fl_progressive,q_80,w_800/ol9ceoqxidudap8owlwn.jpg',
        'https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/12/boxer-dog.jpg'
    ];

    getCatList(){
        return this.catList;
    }

    getDogList(){
        return this.dogList;
    }
}