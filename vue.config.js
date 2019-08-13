module.exports = {
    devServer : {
        proxy : {
            '/dc' : {
                target : 'https://www.jtyrl.cn',
                changeOrigin : true
            }
        }
    }
}