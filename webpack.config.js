module.exports= {
    entry: './src/js/app.js',
    output: {
        path: './js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader:'babel-loader',
            query: {
                presets: ['es2015','react'],
                plugins: ['react-html-attrs'],
            }
        },{
            test: /\.pug$/,
            exclude:/node_modules/,
            loader:'pug-loader',    
        }, {
            test: /(\.scss|\.css)$/,
            exclude:/node_modules/,
            loaders:["style","css","sass"],
        }, {
            test: /(\.png|\.jpg)$/,
            exclude:/node_modules/,
            loaders:["url-loader"],
        }, {
            test: /\.otf$/,
            exclude:/node_modules/,
            loaders:["url-loader"],
        }]
    }
};
