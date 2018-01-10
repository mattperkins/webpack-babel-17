const path = require('path')

module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            './src/app.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'lemon.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'stage-0']
            }
        }]
    }
}