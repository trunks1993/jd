// const { injectBabelPlugin } = require('react-app-rewired');
// const rewireCssModules = require('react-app-rewire-css-modules');
// const rewireLess = require('react-app-rewire-less-modules')
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, '.', dir)
}


module.exports = function override(config, env) {
    // do stuff with the webpack config...

    //启用ES7的修改器语法（babel 7）
    // config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { "legacy": true }], config)   //{ "legacy": true }一定不能掉，否则报错

    //css模块化
    // config = rewireCssModules(config, env);

    //配置别名
    config.resolve.alias = {
        '@': resolve('src')
    };

    config.resolve.mainFiles = ["index"];
    //antd按需加载
    // config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config,);

	//less模块化
	// config = rewireLess.withLoaderOptions({
	//    javascriptEnabled: true,
	//    modifyVars: {'@primary-color': '#1DA57A'},
	// })(config, env)


    return config;
};
