const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/register',
    createProxyMiddleware({
      target: 'http://65.21.240.211:5000',
      changeOrigin: true,
    })
  );
  app.use(
    '/login',
    createProxyMiddleware({
      target: 'http://65.21.240.211:5000',
      changeOrigin: true,
    })
  );
};