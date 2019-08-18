// vue.config.js
module.exports = {
    configureWebpack: {
        output: {
            publicPath: '/static/'
        },
        module: {
            loaders: [{
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            }, {
              test: /\.css$/,
              loader: "style-loader!css-loader"
            }, {
              test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
              loader: 'url-loader?limit=100000' }]
          },
    },
    module: {
        loaders: [{
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }, {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000' }]
      },
}