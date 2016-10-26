const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

module.exports = {
    entry: {
        app: [
            './public/js/index.js',
            './public/js/dataService.js',
            './public/js/service.js',
            './public/js/helloDirective.js',
            './public/js/nameDirective.js',
            './public/js/rangeValidator.js',
            './public/js/matchValidator.js',
            './public/js/nameComponent.js',
            './public/js/ball.js',
        ],
        vendor: [
            './public/vendor/jquery-3.1.0.js',
            './node_modules/angular/angular.js',
            './node_modules/angular-resource/angular-resource.js',
            './node_modules/angular-ui-router/release/angular-ui-router.js',
            './node_modules/ngstorage/ngStorage.js',
        ]
    },
    devtool: 'cheap-module-source-map',
    debug:true,
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['to-string-loader', 'css-loader']
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }, {
            test: /\.js$/,
            loader: 'script-loader',
            exclude: ['./node_modules/**/*.js']
        }, {
            test: require.resolve("jquery"),
            loader: "imports?jQuery=jquery,$=jquery,this=>window,require=>false"
        }]
    },
    plugins: [
        new CommonsChunkPlugin('vendor', 'vendor.js'),
        // new CopyWebpackPlugin([{
        //     from: './public',
        //     to: 'assets'
        // }]),
        new HtmlWebpackPlugin({
            template: './public/views/index.html',
            chunksSortMode: 'dependency',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        }),
        new HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.json', '.css'],
        alias: {
            jquery: 'jquery/src/jquery'
        }
    },
    devServer: {
    	port: 5000,
    	host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: '/',
        proxy: {
            '/api/*': 'http://localhost:8000'
        }
    },
    node: {
        global: true,
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
}
