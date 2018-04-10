/*
 *  配置参数
 */
exports.default = {
	// 文件别名配置
	alias: {

	},
	// 全局引入模块配置
	global: {
		'jquery': 'window.jQuery',
		'hiido_yylive_v3': 'window.hiido_yylive_v3',
		'yyApiUtil': 'window.yyApiUtil',
		'jweixin': 'window.wx'
	},
	// 端口
	port: 3000,
	// 测试环境静态资源地址
	publicPath: '//webtest.yystatic.com/project{{#group}}/group_topic{{/group}}/{{ name }}/{{ system }}/',
	// 生产环境静态资源地址
	productPublishPath: '//web.yystatic.com/project{{#group}}/group_topic{{/group}}/{{ name }}/{{ system }}/',
	// 测试环境项目输出地址
	outputPath: '../dist/',
	// 生产环境项目输出地址
	productOutputPath: '../../../../../trunk/{{ name }}/{{ system }}/'
}

