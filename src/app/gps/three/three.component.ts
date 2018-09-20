import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(
    private title: Title,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(t => title.setTitle(t['title']));
  }

  ngOnInit() {
    console.log(this.route);
    this.route.url.subscribe(r => {
      console.log(r);
    });
    this.route.data.subscribe(r => {
      console.log(r);
    });
    // 路由参数获取目前用这个，以前的即将废弃
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

}
