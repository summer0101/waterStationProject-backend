module.exports = {
    data(data,status,msg){
        return {
            data:data || [],
            status:status || 0,
            msg:msg || ''
        }
    },
    datapage(count,data,status,msg){
        return{
            data:{
                count:count || 0,
                list:data
            },
            status:status || 0,
            msg:msg || ''
        }
    }
}