// babel.config.js文件中如下修改：
module.exports = {
  presets: [
    [
      // babel预设
      "@babel/preset-env",
      {
        // 使用corejs 3的版本
        corejs: 2,
        // 按需加载
        useBuiltIns: "entry",
        // 不使用模块化  交给其它打包工具处理
        modules: false,
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-transform-runtime"], //就是在此处添加了两个@babel/runtime中的插件
    "@babel/plugin-syntax-dynamic-import",
  ],
};
