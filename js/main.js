//设置依赖的配置文件
require.config({
	paths:{
		"jquery":"jquery-1.11.1.min",
		"cookie":"cookie2",
		"hdindex":"hd_index",
		"hdlist":"hd_list",
		"pagination":"../script/jquery.pagination",
		"hddetail":"hd_detail",
	}
})
//设置依赖
require(["jquery","cookie","hdindex","hdlist","pagination","hddetail"],function($,co,ind,list,pag,det){
//	$("body").css("background","red")
	
//	co.setCookie();
//	co.getCookie();
//	co.removeCookie();
//登录后获取name名，表示已经登录
	// var str = co.getCookie("prolist");
	// var hear_use = str[0].phone
	// ind.fn(hear_use);
	// console.log(str[0].phone)
	list.fn();
	pag.fn();
	det.fn();

})
