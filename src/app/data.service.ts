import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';
import { Behaviorsubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  gifs = new Behaviorsubject<any>([]);

  constructor(private http:HttpClient) { }

  getTrendingGifs() {
    return this.http.get ();
  }

  searchGifs() {
    return this.http.get();
  }
}
