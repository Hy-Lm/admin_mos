// const FileManagerPlugin = require('filemanager-webpack-plugin')
// module.exports = {
//     configureWebpack: {  //webpack的相关配置在这里
//         plugins: [
//             new FileManagerPlugin({  //初始化 filemanager-webpack-plugin 插件实例
//                 onEnd: {
//                     delete: [   //首先需要删除项目根目录下的dist.zip
//                         './dist.zip',
//                     ],
//                     archive: [ //然后我们选择dist文件夹将之打包成dist.zip并放在根目录
//                         {source: './dist', destination: './dist.zip'},
//                     ]
//                 }
//             })
//         ]
//     }
// };