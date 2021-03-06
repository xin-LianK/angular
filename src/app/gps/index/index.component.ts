import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, mergeMap } from 'rxjs/operators';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    sessionId: Observable<string>;
    token: Observable<string>;

    constructor(
        private title: Title,
        private route: ActivatedRoute,
        private router: Router

    ) {
        this.route.data.subscribe(t => title.setTitle(t['title']));
        this.router.events.subscribe((r) => {
          // example: NavigationStart, RoutesRecognized, NavigationEnd
            if (r instanceof NavigationEnd) {
                // 当导航成功结束时执行
            }
        });
    }

    ngOnInit() {
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParamMap
            .pipe(map(params => params.get('session_id') || 'None'));

        // Capture the fragment if available
        this.token = this.route
            .fragment
            .pipe(map(fragment => fragment || 'None'));
    }
}
