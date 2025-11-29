module.exports = (env) => {
    return {
        mode: "development",
        entry: './frontend/index.js',
        output: {
            filename: './frontend-build/bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                            },
                        },
                    ],
                },
            ],
        },
    }
}