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
