var webpack = require('webpack');

module.exports = {
    entry: "./src/glance.js",
    output: {
        path: 'dist',
        filename: 'glance.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        })
    ],
    module: {
        loaders: [
            {test: /.js/, loaders: ['babel-loader']}
        ]
    }
};