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
    this.route.data.subscribe(t => title.setTitle(t['title']));
  }

  ngOnInit() {
  }

}
