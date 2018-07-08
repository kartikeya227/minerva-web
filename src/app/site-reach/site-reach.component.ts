import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sites',
  templateUrl: './site-reach.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SiteComponent implements OnInit {

  articles: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      console.log(data);
      this.articles = data;
    });
  }


}
