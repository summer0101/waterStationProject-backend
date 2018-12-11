const router = require('koa-router')();
const listctrl = require('./indexList/indexListController');   // 引入列表模块逻辑层
console.log(listctrl)
router
         //  商品列表模块
       .get('/api/wateruser/list',listctrl.getlist)     // 获取列表
module.exports = router;
