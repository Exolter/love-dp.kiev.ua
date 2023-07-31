const plugins = [];

if (process.env.NODE_ENV === "production") {
  // Only import when needed
  const { join } = require("path");
  const PrerenderPlugin = require("prerender-spa-plugin");
  const renderer = PrerenderPlugin.PuppeteerRenderer;

  //Add the prerender plugin to the plugins array
  plugins.unshift(
    new PrerenderPlugin({
      staticDir: join(__dirname, "dist"), //Vue создаёт папку
      routes: [
        "/",
        "/about-us",
        "/features-1",
        "/team",
        "/pricing",
        "/faq",
        "/blog-1",
        "/blog-details",
        "/contact",
        "/terms-condition",
      ], //Что рендерить
      renderer: new renderer({
        renderAfterDocumentEvent: "render-complete",
      }), //Настроить рендерер со всеми параметрами по умолчанию
    })
  );
}

module.exports = {
  publicPath: "",
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins,
  },
};
