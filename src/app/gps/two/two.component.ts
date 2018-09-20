import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(
    private title: Title,
    private route: ActivatedRoute
  ) {
    console.log(this.route);
    this.route.url.subscribe(r => {
      console.log(r);
    });
    this.route.data.subscribe(r => {
      console.log(r);
    });
    this.route.paramMap.subscribe(r => {
      console.log(r);
    });
    this.route.queryParamMap.subscribe(r => {
      console.log(r);
    });
    this.route.fragment.subscribe(r => {
      console.log(r);
    });
    console.log(this.route.outlet);
    console.log(this.route.routeConfig);
    console.log(this.route.parent);
    console.log(this.route.firstChild);
    console.log(this.route.children);
  }

  ngOnInit() {
  }

}
