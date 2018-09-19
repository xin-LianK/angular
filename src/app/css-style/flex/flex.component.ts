import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) {
    this.route.data.subscribe(t => title.setTitle(t['title']));

  }

  ngOnInit() {
  }

}
