module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/index.scss";
        `
      }
    }
  },
  // During development process, you have to request API's from a different domain or port.
  // This settings avoid those cross domain issues and also handle all you requests from the same domain / port
  // including automatically the api before the url, inside the interceptor we just have to define the axio baseUrl as /api
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:8181",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  // Vue creates its own service worker automatically once your app is built.
  // The default behaviour caches your entire applciation.
  // However, you can create your own service worker to control extra stuff
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js"
    }
  }
};
