const path = require('path')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      Actions: 'src/actions/index.js',
      PostsIndex: 'src/components/posts_index.js',
      PostsNew: 'src/components/posts_new.js',
      PostsShow: 'src/components/posts_show.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
