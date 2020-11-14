import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifs: any[] = [];
  subscription: Subscription;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.getTrendingGifs();
    this.subscription =this.dataservice.getGifs()
    .subscribe((response: any) => {
      console.log('Data', response);
      this.gifs = response ;
    });
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
