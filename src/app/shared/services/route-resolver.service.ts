import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteResolverService implements Resolve<Crisis>{
  test = new Observable<Crisis>();
  constructor(private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
    const id = route.paramMap.get('id');

    // test没有值导致路由卡死，然后我也不知道咋办了
    return this.test.pipe(
      take(1),
      map(crisis => {
        if (crisis) {
          console.log(1);
          return crisis;
        } else { // id not found
          console.log(2);

          this.router.navigate(['/home']);
          return null;
        }
      })
    );
  }
}
export class Crisis {
  crisis: string;
  name: string;
}
