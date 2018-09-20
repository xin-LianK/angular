import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RouteChangeAnimation } from '../../shared/animations/route-animation';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  animations: [RouteChangeAnimation]
})
export class TwoComponent implements OnInit {
  id: number;
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute';

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.route);
    this.route.url.subscribe(r => {
      console.log(r);
    });
    this.route.data.subscribe(r => {
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


  /**
   *
   *获取路由参数的各种方法
   * @memberof TwoComponent
   */
  getRouteParam() {
    // 路由参数获取目前用这个，以前的即将废弃
    this.route.paramMap.subscribe(r => {
      console.log(r);
    });
    this.route.queryParamMap.subscribe(r => {
      console.log(r);
    });

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.id = +params.get('id');
        return new Observable<any>();
      })
    );

    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
  }

  goToPath() {
    this.router.navigate(['/html5', {}]);
  }
}
