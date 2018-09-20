import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.route.data.subscribe(t => title.setTitle(t['title']));
    this.router.events.subscribe(r => {
      console.log(r);
    });
  }

  ngOnInit() {

  }

}
