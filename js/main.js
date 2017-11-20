//设置依赖的配置文件
require.config({
	paths:{
		"jquery":"jquery-1.11.1.min",
		"hdindex":"hd_index",
		"hdlist":"hd_list",
		"pagination":"../script/jquery.pagination",
		"hddetail":"hd_detail",
	}
})
//设置依赖
require(["jquery","hdindex","hdlist","pagination","hddetail"],function($,ind,list,pag,det){
//	$("body").css("background","red")
	ind.fn();
	list.fn();
	pag.fn();
	det.fn();

})
