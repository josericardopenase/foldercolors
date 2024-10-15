const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'foldercolor.js',
        path: path.resolve(__dirname, 'js'),
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        fallback: {
            "path": require.resolve("path-browserify")
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.svg$/,
                type: 'asset/source', // This will inline the SVG content as a string
            },
        ],
    },
};
