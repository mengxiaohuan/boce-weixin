/**
 * 用户code 换取 session_key
 * @type {String}
 */
export const USER_SPECICAL_INFO = "userSpecialInfo";

/**
 * 用户信息
 * @type {String}
 */
export const USER_INFO = "userInfo";

export const USER_ID = "userId";

/**
 * 系统信息
 * @type {String}
 */
export const SYSTEM_INFO = "systemInfo";


export const ADDRESS_ID = "addressId";

export const SEL_CLASS_CODE = "selClassCode";

/**
 * 存储用户鉴权信息数据key
 * @type {string}
 */
export const TOKEN = 'token';

/**
 * 存储购物车信息数据key
 * @type {string}
 */
export const CART = 'cart';

/**
 * 标识登录状态
 * @type {string}
 */
export const LOGIN_STATE = 'login_state';

/**
 * TOKEN过期时间
 * @type {number} 毫秒
 */
export const TOKEN_EXPIRE = 6 * 60 * 60 * 1000;

/**
 * TOKEN生成时间
 * @type {string}
 */
export const TOKEN_GENERATE_TIME = 'token_generate_time';

//商品排序 默认综合排序，1销量升序，2销量降序，3价格升序，4价格降序
export const SORT_DEFAULT = '-1';
export const SORT_SALE_ASC = '1';
export const SORT_SALE_DESC = '2';
export const SORT_PRICE_ASC = '3';
export const SORT_PRICE_DESC = '4';

//订单是否支持自提：1不支持;2支持
export const SHIP_STATUS_FALSE = '1';
export const SHIP_STATUS_TRUE = '2';

//订单状态
export const ORDERSTATUS_WEICHULI = '01';//未付款
export const ORDERSTATUS_YSKWFH = '02';//已付款，未发货
export const ORDERSTATUS_YFH = '06';//已发货
export const ORDERSTATUS_YDH = '07';//已到货
export const ORDERSTATUS_YZFSK = '10';//已支付预订单首款
export const ORDERSTATUS_NO_BILL = '14';//代开发票

export const STATUS_DICT_1 = { // 挂牌订单（type='0'、'2'、'3'）
  '01': '等待买家付款',
  '02': { '1': '待发货', '2': '买家已付款' },
  '04': '已取消',
  '05': '应退款',
  '06': '已发货',
  '07': '交易成功',
  '08': '已退款',
  '14': '待开发票'
};

export const STATUS_DICT_2 = { // 预售订单（type='4'）
  '01': '等待支付预订金',
  '02': { '1': '待发货', '2': '待提货' },
  '04': '已取消',
  '06': '已发货',
  '07': '交易成功',
  '10': '待支付剩余货款',
  '14': '待开发票'

};

export const STATUS_DICT_3 = { // 竞买订单（type='C'）
  '01': '未付款',
  '02': '待提货',
  '07': '交易成功',
  '14': '待开发票',
  '20': '待卖家支付保证金和手续费'
};

//商品评价类型
export const COMMENT_ALL = 0;
export const COMMENT_GOOD = 1;
export const COMMENT_MID = 2;
export const COMMENT_BAD = 3;

//订单申请服务类型 01用户退款 02用户退货
export const ORDER_SERVICE_TYPE_REFUND = "01";
export const ORDER_SERVICE_TYPE_RETURN = "02";

//订单申请服务状态 01申请中 02申请关闭 03申请成功 04微信退款申请中
export const ORDER_SERVICE_RQ = "01";
export const ORDER_SERVICE_CLOSE = "02";
export const ORDER_SERVICE_SUC = "03";
export const ORDER_SERVICE_WRQ = "04";

//支付方式
export const PAY_ARRAY = [{code:'cod',name:'云商支付'}, {code:'wxpay',name:'微信支付'}];
