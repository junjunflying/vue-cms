const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports= {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            //究竟什么时候应用path.join  还不是很懂
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html',
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {
                test:/\.(jpg|png|bmp|gif|jpeg)$/,use:'url-loader?limit=7460&name=[hash:8]-[name].[ext]'
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,use:'url-loader'
            },
            {
                test:/\.js$/,use: 'babel-loader',exclude: /node_modules/
            },
            {
                test:/\.vue$/,use:'vue-loader'
            }
        ]
    }
}