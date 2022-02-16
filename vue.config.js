// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//     .BundleAnalyzerPlugin;

module.exports = {
    lintOnSave: false,
    runtimeCompiler: true,
    // configureWebpack: {
    //     plugins: [new BundleAnalyzerPlugin()]
    // },
    devServer: {
        port: 80,
        proxy: {
            // proxy all requests starting with /api to jsonplaceholder
            '/api': {
                target: 'http://satrapp.ppklms.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/pm': {
                target: 'http://pm.sarmadbs.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/pm': ''
                }
            }
        }
    },

    chainWebpack: config => config.plugins.delete('named-chunks'),

    transpileDependencies: [
      'vuetify'
    ]
}
