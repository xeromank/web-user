module.exports = {
  chainWebpack: (config) => { config.plugins.delete('prefetch') },

  pluginOptions: {
    i18n: {
      locale: 'ko',
      fallbackLocale: 'ko',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
}
