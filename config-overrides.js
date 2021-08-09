// This file is to introduce styles on demand and transform px to rem automatically.

const {
    override,
    addPostcssPlugins,
    fixBabelImports
} = require('customize-cra')
module.exports = override(fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addPostcssPlugins([require("postcss-px2rem")({
        remUnit: 37.5
    })])
)