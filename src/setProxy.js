const proxySettings = {
  // 接口代理1
  '/shuyuan/': {
    target: 'http://shuyuan.miaogongzi.net',
    changeOrigin: true,
  },
};

module.exports = proxySettings;
