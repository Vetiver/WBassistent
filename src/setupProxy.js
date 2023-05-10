const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/register',
    createProxyMiddleware({
      target: 'https://api.wbassistent.ru',
      changeOrigin: true,
    })
  );
  app.use(
    '/login',
    createProxyMiddleware({
      target: 'https://api.wbassistent.ru',
      changeOrigin: true,
    })
  );
  app.use(
    '/token/get_data/',
    createProxyMiddleware({
      target: 'https://api.wbassistent.ru',
      changeOrigin: true,
    })
  );
};