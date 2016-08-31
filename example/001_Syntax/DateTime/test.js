
/**
 * 對Date的擴展，將 Date 轉化為指定格式的String
 * 月(M)、日(d)、小時(h)、分(m)、秒(s)、季度(q) 可以用 1-2 個佔位符， 
 * 年(y)可以用 1-4 個佔位符，毫秒(S)只能用 1 個佔位符(是 1-3 位的數字) 
 * 例子： 
 * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
 * (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
*/
Date.prototype.format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小時 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

function today_is(){
    const day_list = ['日', '一', '二', '三', '四', '五', '六'];
    let day = day_list[new Date().getDay()]; 

    console.log(`Today is 星期${day}`);
}
function main(){
    console.log(`new Date() = ${new Date()}`);
    console.log(`new Date(0) = ${new Date(0)}`);
    console.log(`new Date(2016, 8, 4, 13, 59, 58, 3) = ${new Date(2016, 8, 4, 13, 59, 58, 3)}`);

    let d = new Date();
    let t = new Number(d);
    let d2 = new Date( t );

    console.log(`
    ======
    let d = new Date();
    let t = new Number(d);
    let d2 = new Date( ${t} );
    ${d2} == ${d}
    ======
    `);

    // utc to localtime
    console.log( (new Date(Date.parse('2016-08-04 07:04:22Z'))).toLocaleString()	);
    console.log( Date.parse('2016-08-04 07:04:22Z') );
    
    console.log((new Date()).format("yyyy-MM-dd hh:mm:ss.S"));
    
    today_is();
}
    
if (require.main === module) {
    main();
}