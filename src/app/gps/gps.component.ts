import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css']
})
export class GpsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  goToPage() {
    this.router.navigate(['/gps/three', {
      what: 3,
      name: 'Kity'
    }]);
  }
}
