import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private title: Title,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(t => title.setTitle(t['title']));
  }

  ngOnInit() {
  }

}
