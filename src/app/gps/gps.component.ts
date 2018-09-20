import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css']
})
export class GpsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute

  ) {
    // console.log(this.route);
    // this.route.url.subscribe(r => {
    //   console.log(r);
    // });
    // this.route.data.subscribe(r => {
    //   console.log(r);
    // });
    // this.route.paramMap.subscribe(r => {
    //   console.log(r);
    // });
    // this.route.queryParamMap.subscribe(r => {
    //   console.log(r);
    // });
    // this.route.fragment.subscribe(r => {
    //   console.log(r);
    // });
    // console.log(this.route.outlet);
    // console.log(this.route.routeConfig);
    // console.log(this.route.parent);
    // console.log(this.route.firstChild);
    // console.log(this.route.children);
  }

  ngOnInit() {
  }
  goToPage() {
    this.router.navigate(['/gps/three', {
      what: 3,
      name: 'Kity'
    }]);
  }
}
