import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  package = new Object();
  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) {
    this.route.data.subscribe(t => title.setTitle(t['title']));
  }

  ngOnInit() {

  }
  wechatPay() {
    WeixinJSBridge.invoke('getBrandWCPayRequest', this.package, (arg) => {
      // alert(JSON.stringify(arg));
      const arg_str = JSON.stringify(arg);
      if (arg_str.includes('get_brand_wcpay_request:ok')) {
      } else if (arg_str.includes('get_brand_wcpay_request:cancel')) {
      }
    });
  }
}
