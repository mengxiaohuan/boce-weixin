import wepy from 'wepy';
import tip from './tip'
import {
  TOKEN, LOGIN_STATE
} from '@/utils/constant';

const wxRequest = async(params = {}, url, auth = false, loading=true, ignoreAuthCheck=false) => {
  const token = wepy.getStorageSync(TOKEN) || '';
  const login_state = wepy.getStorageSync(LOGIN_STATE) || false;
  if (auth && !login_state && !ignoreAuthCheck) {
    wepy.navigateTo({
      url: '/pages/login_type'
    });
    return;
  }

  if (loading) {
    tip.loading();
  }
  let data = params.query || {};
  let method = 'GET';
  let header = {};
  if (typeof params.method === 'string' && params.method.toUpperCase() === 'POST') {
    header['Content-Type'] = 'application/x-www-form-urlencoded';
    method = 'POST';
  }

  if (auth) {
    data['token'] = token;
  }

  let body = {
    url: url,
    method,
    data,
  };

  if (Object.keys(header).length > 0) {
    body.header = header;
  }

  let res = await wepy.request(body);
  if (loading) {
    tip.loaded();
  }
  return res;
};


module.exports = {
    wxRequest
};
