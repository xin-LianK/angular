/**
 * 分页数据
 */
interface PagedResult<T> {
  PageSize: number;
  PageIndex: number;
  Count: number;
  TotalCount: number;
  Data: Array<T>;
}
/**
 * 分页查询格式
 */
interface PageRequestModel {
  PageIndex?: number;
  PageSize?: number;
  Sort?: PageSort;
}
/**
 * 排序
 */
interface PageSort {
  Active?: string;
  Direction?: 'asc' | 'desc' | '';
}

/**
 * 下拉列表格式
 */
interface SelectItem {
  Value: any;
  Text: string;
}

/**
 * API 返回异常格式
 */
interface ErrorModel {
  Message?: string;
  ModelState?: any;
}

/**
 * 键值类型
 */
interface KeyValuePair {
  Key: any;
  Value: any;
}


/*微信公众号平台默认配置 */
interface wxConfig {
  debug?: boolean;
  appId?: string;
  timestamp?: string;
  nonceStr?: string;
  signature?: string;
  jsApiList?: Array<string>;
}
/*微信公众号平台分享配置 */
interface wxShareConfig {
  title?: string;
  link?: string;
  imgUrl?: string;
  desc?: string;
  success?: () => void;
  cancel?: () => void;
}
interface wxqrScanConfig {
  needResult?: number;
  scanType?: Array<string>;
  success: (res) => void;
}
interface wxMenuItemConfig {
  menuList: Array<string>;
}
interface jsWx {
  config(config: wxConfig);
  ready(c: () => void): void;
  onMenuShareTimeline(share: wxShareConfig);
  onMenuShareAppMessage(share: wxShareConfig);
  onMenuShareQQ(share: wxShareConfig);
  onMenuShareWeibo(share: wxShareConfig);
  onMenuShareQZone(share: wxShareConfig);
  scanQRCode(config: wxqrScanConfig);
  showAllNonBaseMenuItem();
  hideAllNonBaseMenuItem();
  showMenuItems(config: wxMenuItemConfig);
  hideMenuItems(config: wxMenuItemConfig);
  closeWindow();
}
declare const wx: jsWx;
/*---------------------*/


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
