import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  gifs = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getTrendingGifs(){
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=BWYFtWtDXVsZyZmh3LfRbKALka8HdfwF&limit=50&rating=g')
    .subscribe((responce: any) => {
      this.gifs.next(responce.data);
    });
  }



  searchGifs(gifName:string) {
    return this.http.get('https://api.giphy.com/v1/gifs/search?q=${gifName}api_key=BWYFtWtDXVsZyZmh3LfRbKALka8HdfwF&limit=50&rating=g')
    .subscribe((responce: any) => {
      this.gifs.next(responce.data);
    });
  }
  getGifs() {
    return this.gifs.asObservable();
  }
}

