const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    },
    devServer: {
        port: 9090,
        open: true,
        hot: true,
        publicPath: '/dist/',
        contentBase: [
            path.join(__dirname, 'views'),
            
        ],
        watchContentBase: true,
    }
};