interface PagedResult<T> {
  PageSize: number;
  PageIndex: number;
  Count: number;
  TotalCount: number;
  Data: Array<T>;
}
interface PageRequestModel {
  PageIndex?: number;
  PageSize?: number;
  Sort?: PageSort;
}
interface PageSort {
  Active?: string;
  Direction?: 'asc' | 'desc' | '';
}


declare var WeixinJSBridge: WeixinJSBridgeInterface;
interface WeixinJSBridgeInterface {
  invoke(type: string, package: paymentPackage, callback: (arg: callArg) => void);

}
interface paymentPackage {
  appId?: string;
  timeStamp?: string;
  nonceStr?: string;
  package?: string;
  signType?: string;
  paySign?: string;
}
interface callArg {
  err_msg?: string;
}


declare var wx: weChatJsInterface;
interface weChatJsInterface {
  getLocation(type: string, callback: (arg: getLocationCallBack) => void);
}

interface getLocationCallBack {
   latitude? :number; // 纬度，浮点数，范围为90 ~ -90
   longitude?:number; // 经度，浮点数，范围为180 ~ -180。
   speed?: number; // 速度，以米/每秒计
   accuracy?: string;  // 位置精度
}


// wx.getLocation({
//   type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
//   success: function (res) {
//   var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
//   var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
//   var speed = res.speed; // 速度，以米/每秒计
//   var accuracy = res.accuracy; // 位置精度
//   }
//   });
