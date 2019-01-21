import {
  wxRequest
} from '@/utils/wxRequest';

const p2cApi = 'http://localhost:8080';
// const p2cApi = 'http://192.168.7.166:8888';
// const p2cApi = 'http://http://wechatpay.natapp1.cc';
// const p2cApi = 'https://ystest.boce.cn:22243';

/**
 * 用户登录接口
 * @param {string} mobile   用户名
 * @param {string} password 密码
 * @returns {*}
 */
const userLogin = (mobile, password) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatLogin',
    userId: mobile,
    password,
  },
  method: 'POST'
}, p2cApi + '/api/userapi.do', true, true, true);

/**
 * 微信登录获取token接口
 * @param {string} code
 * @returns {*}
 */
const wechatLogin = (code) => wxRequest({
  method: 'POST',
  query: {
    charset: 'utf8',
    method: 'wechatGetToken',
    code,
  }
}, p2cApi + '/api/userapi.do');

/**
 * 验证token有效性
 * @returns {*}
 */
const checkToken = () => wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatCheckToken',
  }
}, p2cApi + '/api/userapi.do', true, false, true);

/**
 * 获取用户信息数据
 * @returns {*}
 */
const userInfo = () => wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatGetUser',
  }
}, p2cApi + '/api/userapi.do', true);

/**
 * 获取手机验证码接口
 * @param {string} mobile 手机号
 * @returns {*}
 */
const getPhoneCode = (mobile) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatSendMessage',
    mobile,
    type:'register',
  },
  method: 'POST'
}, p2cApi + '/api/userapi.do', true, false, true);

/**
 * 账号注册接口
 * @param {string} mobile    注册手机号
 * @param {string} password  密码
 * @param {string} phoneCode 手机验证码
 * @returns {*}
 */
const userRegister = (mobile, password, phoneCode) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatRegister',
    mobile,
    password,
    mobileCheck: phoneCode
  },
  method: 'POST'
}, p2cApi + '/api/userapi.do', true, false, true);

/**
 * 搜索商品接口
 * @param {string} p_type 类型
 * @param {string} zoneId 分类馆
 * @param {string} cateCode 分类ID
 * @param {string} key  搜索关键词
 * @param {number} page 页数，从1开始
 * @param {number} size 分页大小
 * @returns {*}
 */
const searchProduct = (p_type,zoneId,cateCode, key, page, size, sort) => wxRequest({
  query: {
    method: 'searchProducts',
    p_type:p_type,
    zoneId:zoneId,
    categoryId: cateCode,
    key,
    pageIndex: page,
    pageSize: size,
    sort
  },
  method: 'POST'
}, p2cApi + '/api/searchapi.do');

/**
 * 获取首页banner接口
 * @returns {*}
 */
const getHomeBanner = () => wxRequest({
  query: {
    charset: 'utf8',
    method: 'bannerList'
  }
}, p2cApi + '/api/productapi.do');

/**
 * 获取首页产品专区接口
 * @returns {*}
 */
const getHomeZone = () => wxRequest({
  query: {
    charset: 'utf8',
    method: 'productZoneList'
  }
}, p2cApi + '/api/productapi.do');

/**
 * 首页热销商品列表
 * @param pageNo 第几页
 * @param pageSize 每页显示几条
 * @returns {*}
 */
const getHomeHotProduct = (page, size) =>wxRequest({
  query: {
    charset: 'utf8',
    method: 'getHotProductsIndex',
    pageIndex: page,
    pageSize: size
  }
}, p2cApi + '/api/productapi.do');

/**
 * 分类馆热销商品
 * @param categoryId 频道名称
 * @param size 查询个数
 * @returns {*}
 */
const getHotProduct = (size) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'getHotProductsByCategoryId',
    zoneId:'mjg',
    size
  }
}, p2cApi + '/api/productapi.do');

/**
 * 获取挂牌商品详情接口
 * @param {string} productId 挂牌商品id
 * @returns {*}
 */
const listedProductDetail = (productId) => wxRequest({
  query: {
    method: 'getProductById',
    charset: 'utf8',
    productId: productId
  }
}, p2cApi + '/api/productapi.do', false, false);

/**
 * 商品评价接口
 * @param {string} productId 挂牌商品id
 * @param {string} pageType 页面类型：init初始化页面
 * @param {string} size 显示条数-页面初始化时用
 * @param {string} pageIndex 第几页
 * @param {string} pageSize 每页显示多少条
 * @param {string} appType 评价类型：0全部 1好评 2中评 3差评
 * @returns {*}
 */
const getCommentList = (productId,pageType,size,pageIndex,pageSize,appType) => wxRequest({
  query: {
    method: 'getProductAppraises',
    charset: 'utf8',
    productId: productId,
    size:size,
    pageType,
    pageIndex,
    pageSize,
    appType
  }
}, p2cApi + '/api/appraisalapi.do');

/**
 * 增加评价
 * @param orderId 订单ID
 * @param proData 商品评价数据
 * @param shopComment 对商家评价 - 1好评 2中评 3差评
 * @param shopStar 对商家评分
 * @param shopContent 对商家评论内容
 * @returns {*}
 */
const addComment = (orderId, proData, shopComment, shopStar, shopContent) => wxRequest({
  method: "POST",
  query: {
    charset: "utf8",
    method: 'addProductAppraisal',
    orderId,
    proData,
    shopComment,
    shopStar,
    shopContent
  }
}, p2cApi + '/api/appraisalapi.do', true , false, true);

/**
 * 获取竞拍出价记录接口
 * @param {string} productId 商品id
 * @returns {*}
 */
const auctionBidInfo = (productId) => wxRequest({
  query: {
    method: 'getAuctionBidInfo',
    charset: 'utf8',
    productId,
  }
}, p2cApi + '/api/auctionapi.do', false, false);


/**
 * 获取系统时间接口，用于判断竞拍时间倒计时等
 * @returns {*} 毫秒时间戳
 */
const serverTime = () => wxRequest({
  query: {
    method: 'getServerTime',
    charset: 'utf8',
  }
}, p2cApi + '/api/auctionapi.do', false, false);


/**
 * 我的订单列表接口
 * @param {number} page      页码，从1开始
 * @param {number} size      分页大小
 * @param {number} timestamp 查询起点时间戳
 * @param {string} orderType 订单状态（A全部 C已完成 D待收货 P待付款 T退款 空为A）
 * @returns {*}
 */
const myOrderList = (page, size, timestamp, orderType='A') => wxRequest({
  query: {
    method: 'orderList',
    charset: 'utf8',
    page,
    size,
    timestamp,
    orderType
  }
}, p2cApi + '/api/userapi.do', true);

/**
 * 获取订单详情接口
 * @param {string} orderId 订单id
 * @returns {*}
 */
const orderDetail = (orderId) => wxRequest({
  query: {
    method: 'orderDetail',
    charset: 'utf8',
    orderId,
  }
}, p2cApi + '/api/userapi.do', true);

/**
 * 获取默认收货人接口
 * @param pid_list  商品ID集合
 * @param storeid_list  商户ID集合
 * @returns {*}
 */
const defaultAddress = (pidList,sidList) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'getDefaultCustomerInfo',
    pid_list: JSON.stringify(pidList),
    storeid_list: JSON.stringify(sidList),
  }
}, p2cApi + '/api/userapi.do', true);

/**
 * 根据地址ID获取地址信息
 * @param {string} addressId  地址ID
 * @returns {*}
 */
// TODO
const getAddressById = (addressId) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'getAddressById',
    addressId
  }
}, p2cApi + '/api/userapi.do', true);

/**
 * 收货地址列表接口
 * @returns {*}
 */
const addressList = () => wxRequest({
  query: {
    charset: 'utf8',
    method: 'getAddressList',
  }
}, p2cApi + '/api/userapi.do', true);

/**
 * 添加收货人信息
 * @param {string} name    姓名
 * @param {string} mobile  手机号
 * @param {string} provinceCode  省编号
 * @param {string} cityCode  市编号
 * @param {string} areaCode  区编号
 * @param {string} homeAddress 详细地址
 * @returns {*}
 */
const addAddress = (name, mobile, provinceCode, cityCode, areaCode, homeAddress) => wxRequest({
  method: 'POST',
  query: {
    method: 'saveCustomerInfo',
    charset: 'utf8',
    name,
    mobile,
    provinceCode,
    cityCode,
    areaCode,
    homeAddress,
  }
}, p2cApi + '/api/userapi.do', true);

/**
 * 删除收货人接口
 * @param {string} addressId 收货人id
 * @returns {*}
 */
const delAddress = (addressId) => wxRequest({
  method: 'POST',
  query: {
    method: 'deleteCustomerInfo',
    charset: 'utf8',
    infoId: addressId,
  }
}, p2cApi + '/api/userapi.do', true);

/**
 * 修改收货人接口
 * @param {string} addressId 收货人id
 * @param {string} isDefault 是否设置为默认地址：1为默认
 * @param {string} name    姓名
 * @param {string} mobile  手机号
 * @param {string} provinceCode  省编号
 * @param {string} cityCode  市编号
 * @param {string} areaCode  区编号
 * @param {string} homeAddress 详细地址
 * @returns {*}
 */
const editAddress = (addressId, isDefault, name, mobile, homeAddress, provinceCode, cityCode, areaCode) => wxRequest({
  method: 'POST',
  query: {
    method: 'updateCustomerInfo',
    charset: 'utf8',
    infoId: addressId,
    isDefault,
    name,
    mobile,
    homeAddress,
    provinceCode,
    cityCode,
    areaCode
  }
}, p2cApi + '/api/userapi.do', true);


/**
 * 发票列表接口
 * @param {string} storeId 店铺id
 * @returns {*}
 */
const invoiceList = (storeId) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'getInvoice',
    storeId: storeId
  }
}, p2cApi + '/api/orderapi.do', true);

/**
 * 提交订单接口
 * @param {string} userInfoId  购买人信息id
 * @param {number} shipType    配送方式 1自提 0配送
 * @param {number} payType     支付方式 0BEST支付 1微信支付
 * @param {object} invoice     发票数据对象，发票类型id 0-无发票,1-普通发票,2-增值税发票
 *                             普通需要：
 *                             invoice_name: 抬头
                               invoice_content： 发票内容
                               增值税发票：
                               invoice_name：抬头
                               invoice_content：内容
                               invoice_tax_tel：注册电话
                               invoice_tax_bank：开户银行
                               invoice_tax_id：纳税人识别标识
                               invoice_tax_account：开户账号
                               invoice_tax_address：注册地址
 * @param {string} note        订单备注留言
 * @param {object} productList json格式[{'id':'', 'qty':},....]
 * @returns {*}
 */
const saveOrder = (userInfoId, shipType, payType, invoice, note, productList) => {
  let query = {
    charset: 'utf8',
    method: 'saveOrder',
    account_type: 1,
    user_info_id: userInfoId,
    ship_type: shipType,
    pay_type: payType,
    note,
    invoice:invoice,
    product_list: JSON.stringify(productList)
  };

  if (invoice.type === 1 || invoice.type === 2) {
    query.invoice_type_id = invoice.type;
    query.invoice_name = invoice.name;
    query.invoice_tax_id = invoice.id;
    query.invoice_content = '商品明细';
  }

  if (invoice.type === 2) {
    query.invoice_tax_tel = invoice.tel;
    query.invoice_tax_bank = invoice.bank;
    query.invoice_tax_account = invoice.account;
    query.invoice_tax_address = invoice.address;
  }

  return wxRequest({
    query,
  }, p2cApi + '/api/orderapi.do', true);
};
/**
 * 取消订单接口
 * @param {string} orderId        订单id
 * @returns {*}
 */
const deleteOrder = (orderId) => wxRequest({
  method: 'POST',
  query: {
    charset: 'utf8',
    method: 'cancelOrder',
    orderId,
  }
}, p2cApi + '/api/orderapi.do', true);
/**
 * 支付竞拍货款接口
 * @param {string} orderId      订单id
 * @param {string} bestPassword best密码
 * @param {string} userInfoId   收货人信息id
 * @param {object} invoice      发票数据对象，发票类型type 0-无发票,1-普通发票,2-增值税发票
 *                             普通需要：
 *                             invoice_name: 抬头
                               invoice_content： 发票内容
                               增值税发票：
                               invoice_name：抬头
                               invoice_content：内容
                               invoice_tax_tel：注册电话
                               invoice_tax_bank：开户银行
                               invoice_tax_id：纳税人识别标识
                               invoice_tax_account：开户账号
                               invoice_tax_address：注册地址
 * @returns {*}
 */
const auctionPay = (orderId, bestPassword, userInfoId, invoice) => {
  let query = {
    method: 'bidBestPay',
    charset: 'utf8',
    orderId,
    bestPassword,
    isMergePay: false,
    user_info_id: userInfoId,
  };

  if (invoice.type === 1 || invoice.type === 2) {
    query.invoice_name_ = invoice.name;
    query.invoice_tax_id_ = invoice.id;
    query.invoice_content_ = '商品明细';
  }

  if (invoice.type === 2) {
    query.invoice_tax_tel_ = invoice.tel;
    query.invoice_tax_bank_ = invoice.bank;
    query.invoice_tax_account_ = invoice.account;
    query.invoice_tax_address_ = invoice.address;
  }

  query.invoice_type_id_ = invoice.type;

  return wxRequest({
    method: 'POST',
    query,
  }, p2cApi + '/api/auctionapi.do', true);
};

/**
 * 订单BEST支付接口
 * @param {string} bestPassword BEST支付密码
 * @param {object} orderList    json 格式 [{'id':''},....]
 * @returns {*}
 */
const bestPayOrder = (bestPassword, orderList) => wxRequest({
  method: 'POST',
  query: {
    charset: 'utf8',
    method: 'bestPayOrders',
    best_password: bestPassword,
    order_list: JSON.stringify(orderList)
  }
}, p2cApi + '/api/orderapi.do', true);

/**
 * 预售订单BEST支付尾款接口
 * @param {string} bestPassword BEST支付密码
 * @param {object} orderList    json 格式 [{'id':''},....]
 * @returns {*}
 */
const reserveBestPayOrder = (bestPassword, orderList) => wxRequest({
  method: 'POST',
  query: {
    charset: 'utf8',
    method: 'reserveBestPayOrders',
    best_password: bestPassword,
    order_list: JSON.stringify(orderList)
  }
}, p2cApi + '/api/orderapi.do', true);

/**
 * 小程序支付前生成签名
 * @param orderList
 * @returns {*}
 */
const unifiedOrder = (orderList) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatPay',
    order_list: orderList
  }
}, p2cApi + '/api/orderapi.do', true);

/**
 * 支付成功后更新支付状态
 * @param orderList
 * @returns {*}
 */
const updatePayStatus = (orderList) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatPayQuery',
    order_list: orderList
  }
}, p2cApi + '/api/orderapi.do', true);

/**
 * 竞拍出价接口
 * @param {string} productId    竞拍商品id
 * @param {number} price        出价价格
 * @param {number} qty          数量
 * @param {string} bestPassword best密码
 * @returns {*}
 */
const auctionBid = (productId, price, qty, bestPassword) => wxRequest({
  method: 'POST',
  query: {
    method: 'yunBocePay',
    charset: 'utf8',
    productId,
    price,
    num: qty,
    pwd: bestPassword,
    payType: 0,
  }
}, p2cApi + '/api/auctionapi.do', true);

/**
 * 确认收货接口
 * @param {string} orderId 订单id
 * @returns {*}
 */
const confirmCollectGoods = (orderId) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatConfirmCollectGoods',
    orderId,
  }
}, p2cApi + '/api/orderinfo.do', true);

/**
 * 确认发票接口
 * @param {string} orderId 订单id
 * @param {number} rType   1：发票确认；0：申请争议处理
 * @returns {*}
 */
const confirmInvoice = (orderId, rType) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatConfirmBill',
    orderId,
    rtype: rType,
  }
}, p2cApi + '/api/orderinfo.do', true);

/**
 * 购物车列表接口
 * @param {object} pidList 商品编号接口数组
 * @returns {*}
 */
const cartInfoList = (pidList) => wxRequest({
  method: 'POST',
  query: {
    charset: 'utf8',
    method: 'productCartInfo',
    // method: 'getShopCartById',
    pid_list: JSON.stringify(pidList)
  }
}, p2cApi + '/api/cartapi.do',true);
// }, p2cApi + '/api/userapi.do',true);

/**
 * 购物车列表接口-从数据库里取
 * @returns {*}
 */
const reCartInfoList = () => wxRequest({
  query: {
    charset: 'utf8',
    method: 'listProducts',
  }
}, p2cApi + '/api/cartapi.do',true);

/**
 * 添加数据库
 * @param {object} pidList 商品编号接口数组
 * @returns {*}
 */
var addCartProduct=(productId,orderNum,orderType,price,name,selfAddress,userId)  => wxRequest({
    method: 'POST',
    query: {
      charset: 'utf8',
      method: 'addProduct',
      productId:productId,
      number:orderNum,
      type:orderType,
      unitPrice:price,
      name:name,
      accountType:'1',
      payType:'0',
      selfAddress:selfAddress,
      userId,
    }
  }, p2cApi + '/api/cartapi.do', true);
/**
 * 删除购物车数据库
 * @param {object} pidList 商品编号接口数组
 * @returns {*}
 */
var removeCartProduct=(productId)  => wxRequest({
  method: 'POST',
  query: {
    charset: 'utf8',
    method: 'removeProduct',
    productId:productId,
  }
}, p2cApi + '/api/cartapi.do', true);
/**
 * 添加数据库
 * @param {object} pidList 商品编号接口数组
 * @returns {*}
 */
var updateProductNum=(productId,num)  => wxRequest({
  method: 'POST',
  query: {
    charset: 'utf8',
    method: 'updateProudctNum',
    param:productId+"-"+num,
  }
}, p2cApi + '/api/cartapi.do', true);
/**
 * 查版块名称接口，用于分类页面
 * @returns {*}
 */
const categoryList = () => wxRequest({
  query: {
    charset: 'utf8',
    method: 'categoryAndSubList'
  }
}, p2cApi + '/api/categoryapi.do');

/**
 * 根据板块分类id查询商品列表
 * @param {string} categoryId 分类id
 * @param {number} page       页数，从1开始
 * @param {number} size       分页大小
 * @returns {*}
 */
const categoryProductList = (categoryId, page, size) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'categoryProductList',
    pageIndex: page,
    pageSize: size,
    categoryId,
  }
}, p2cApi + '/api/productapi.do');

/**
 * 检测BEST绑定状态接口
 * @returns {*}
 */
const bestStateCheck = () => wxRequest({
  query: {
    method: 'getBestBindingInfo',
    charset: 'utf8',
  }
}, p2cApi + '/api/bestapi.do',true);

/**
 * 绑定BEST账号接口
 * @param {string} bestId   best账号
 * @param {string} password best密码
 * @param {string} cardNo   证件号码
 * @returns {*}
 */
const bindBestUser = (bestId, password, cardNo) => wxRequest({
  method: 'POST',
  query: {
    charset: 'utf8',
    method: 'bindBestUser',
    bestUserId: bestId,
    bestPassword: password,
    cardNo,
  }
}, p2cApi + '/api/bestapi.do', true);

/**
 * 解绑BEST账号接口
 * @param {string} password     app密码
 * @returns {*}
 */
const unBindBestUser = (password) => wxRequest({
  method: 'POST',
  query: {
    charset: 'utf8',
    method: 'unBindBestUser',
    password,
  }
}, p2cApi + '/api/bestapi.do', true);

/**
 * BEST资金余额查询接口
 * @returns {*}
 */
const bestAccountBalance = () => wxRequest({
  query: {
    charset: 'utf8',
    method: 'accountBalance',
  }
}, p2cApi + '/api/bestapi.do', true);

/**
 * 查询店铺信息接口
 * @param {string} storeId 店铺id
 * @returns {*}
 */
const storeDetail = (storeId) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'storeDetail',
    storeId,
  }
}, p2cApi + '/api/productapi.do');

/**
 * 查询店铺商品列表接口
 * @param {string} storeId      店铺id
 * @param {number} pageIndex    页码
 * @param {number} pageSize     每页数据条数
 * @returns {*}
 */
const storeProductList = (storeId, pageIndex, pageSize) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'storeProductList',
    storeId,
    pageIndex,
    pageSize
  }
}, p2cApi + '/api/productapi.do');

/**
 * 首页店铺列表接口
 * @returns {*}
 */
const storeList = () => wxRequest({
  query: {
    charset: 'utf8',
    method: 'storeList'
  }
}, p2cApi + '/api/searchapi.do');

const getProtocol = () => wxRequest({
  query: {
    charset: 'utf8',
    method: 'userRegProtocol'
  }
}, p2cApi + '/api/searchapi.do');

/**
 * 获取验证码-重置密码
 * @returns {*}
 */
const sendVerifyCodePwd =(mobile)=>wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatSearchSendMessage',
    mobile,
  }
}, p2cApi + '/api/userapi.do',true,false,true);

/**
 * 验证验证码-重置密码
 * @returns {*}
 */
const confirmVerifyCodePwd =(mobile, code)=>wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatConfirmSearchKey',
    mobile,
    code
  }
}, p2cApi + '/api/userapi.do');

/**
 * 重置密码
 * @returns {*}
 */
const setPwd = (mobile,password,repassword)=>wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatGetPwdByMobile',
    mobile:mobile,
    password:password,
    repassword:repassword,

  }
}, p2cApi + '/api/userapi.do', true, true, true);

/**
 * 验证是否已经绑定手机
 * @param mobile
 * @returns {*}
 */
const checkBindMobile = () =>wxRequest({
  query: {
    charset: 'utf8',
    method: 'isBindWechat',
  }
}, p2cApi + '/api/userapi.do', true, false, true);

/**
 * 获取验证码 - 微信登录时，绑定手机号
 * @param mobile 手机号
 * @returns {*}
 */
const sendVerifyCodeBindMobile = (mobile)=>wxRequest({
  query: {
    charset: 'utf8',
    method: 'wechatGetRandomCode',
    mobile
  }
}, p2cApi + '/api/userapi.do', true, false, true);

/**
 * 绑定手机号 - 微信登录时
 * @param mobile 手机号
 * @param code 验证码
 * @returns {*}
 */
const bindMobile = (mobile, code)=>wxRequest({
  query: {
    charset: "utf8",
    method: 'wechatBindWechat',
    mobile,
    code
  }
}, p2cApi + '/api/userapi.do', true, false, true);

/**
 * 申请退款
 * @param orderId 订单ID
 * @param hwStatus 是否收到货物 0没有收到货 1已经收到货
 * @param backGood 是否需要退货 0不需要退货 1需要退货
 * @param backReason 退款原因
 * @param serviceReason 退款说明
 * @returns {*}
 */
const applyRefund = (orderId, hwStatus, backGood, backReason, serviceReason) => wxRequest({
  method: "POST",
  query: {
    charset: "utf8",
    method: 'applyReturnMoney',
    orderId,
    hwStatus,
    backGood,
    backReason,
    serviceReason
  }
}, p2cApi + '/api/userapi.do', true , false, true);

/**
 * 取消退款
 * @param orderId 订单ID
 */
const cancelRefund = (orderId) => wxRequest({
  query: {
    charset: 'utf8',
    method: 'cancelReturnMoney',
    orderId
  }
}, p2cApi + '/api/userapi.do', true, false, true);

export default {
  userLogin,
  wechatLogin,
  userInfo,
  checkToken,
  getPhoneCode,
  userRegister,
  searchProduct,
  getHomeBanner,
  getHomeZone,
  getHomeHotProduct,
  getHotProduct,
  listedProductDetail,
  auctionBidInfo,
  auctionBid,
  serverTime,
  myOrderList,
  orderDetail,
  defaultAddress,
  getAddressById,
  addressList,
  addAddress,
  delAddress,
  editAddress,
  invoiceList,
  saveOrder,
  auctionPay,
  bestPayOrder,
  reserveBestPayOrder,
  unifiedOrder,
  updatePayStatus,
  confirmCollectGoods,
  confirmInvoice,
  addCartProduct,
  removeCartProduct,
  updateProductNum,
  cartInfoList,
  reCartInfoList,
  categoryList,
  categoryProductList,
  bindBestUser,
  unBindBestUser,
  bestAccountBalance,
  storeDetail,
  storeProductList,
  storeList,
  bestStateCheck,
  getProtocol,
  sendVerifyCodePwd,
  confirmVerifyCodePwd,
  setPwd,
  getCommentList,
  addComment,
  deleteOrder,
  checkBindMobile,
  sendVerifyCodeBindMobile,
  bindMobile,
  applyRefund,
  cancelRefund,
}
