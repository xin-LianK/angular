import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  package = new Object();
  constructor() { }

  ngOnInit() {
    const c = document.getElementById('myCanvas') as HTMLCanvasElement;
    const ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
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
