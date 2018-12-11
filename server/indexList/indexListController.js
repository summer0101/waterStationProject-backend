const q = require('../dbconfig');
const dataFormat = require('../dataFormat');

class indexListController {

  // 获取列表
    static async getlist(ctx) {
		console.log(ctx.query)
		let param = '';
		if (ctx.method == "POST") {
			param = ctx.body;
		} else{
			param = ctx.query || ctx.params; 
		}
		if (param.pageNo == '' || param.pageNo == null || param.pageNo == undefined) {
			ctx.body = dataFormat.data([],0,'当前页数不能为空。')
			return;
		} 
		if (param.pageSize == '' || param.pageSize == null || param.pageSize == undefined) {
			param.pageSize = 20
		} 
		let start = param.pageNo - 1;
		let n = [];
		n.push(start);
		n.push(Number(param.pageSize));
		let sql = 'SELECT * FROM clientinfo limit ?,?'; 
		let sqlgetcount = 'SELECT COUNT(*) FROM clientinfo';
		let list = await q(sql,n);
		let count = await q(sqlgetcount);
		let allCount = count[0]['COUNT(*)'];
		ctx.body = dataFormat.datapage(allCount,list,1,'人员列表获取成功')
       
    }



}
module.exports = indexListController
