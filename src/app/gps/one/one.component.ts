import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(
    private title: Title,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(t => title.setTitle(t['title']));
  }

  ngOnInit() {
  }

}
