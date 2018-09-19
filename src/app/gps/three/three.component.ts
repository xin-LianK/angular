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
  }

}
