//公共头部
$("#wrap_header").load("common.html #hd_common_header",function(){
	$(".hd_xl").mouseenter(function(){
	//console.log($(this))
		$("#wzdh").show();
		
	})
	$("#wzdh").mouseleave(function(){
		$("#wzdh").hide();		
	})
	
	//二级菜单
	$(".hd_banTopL p:first").mouseenter(function(){	
		$(".hd_banTopR_ul").css("display","block");
		$(".hd_banTopR_ul").mouseenter(function(){
			$(".hd_banTopR_ul li").mouseenter(function(){
				$(this).css({
					"background":"#333"
				})
				$(this).find("h5").css({
					"color":"#fff",
					
				}).end().find("a").css({
					"color":"#fff",
				})
				$(this).find("img:first").css({
					"display":"none",
					
				})
				$(this).find("h5 img:last").css({
					"display":"block",
					
				})
				//console.log($(this).find("h5 img:last"))
				$(this).find("i").animate({"margin-left":"12px"},50)
				
				
				$(this).on("mouseenter","a",function(){
					//console.log($(this))
					$(this).css({
						"border-bottom":"1px solid #fff"
					})
				}).on("mouseleave","a",function(){
					$(this).css({
						"border-bottom":"0"
					})
				})
				//ej
				$("#ej").show()
				$("#ej5 a,h6").css({
					"color":"",
					"border":0
				})	
				//$("#ej5").show()
				
			}).mouseleave(function(){
				//console.log($(this))
				$(this).css({
					"background":""
				})
				$(this).find("h5").css({
					"color":"#000",
				}).end().find("a").css({
					"color":"#555",
				})
				$(this).find("img:first").css({
					"display":"block",
					
				})
				$(this).find("h5 img:last").css({
					"display":"none",
					
				})
				$(this).find("i").animate({"margin-left":0},50)
				$("#ej").hide()
				//$("#ej5").hide()
			})
		}).mouseleave(function(){
			$(".hd_banTopR_ul").css("display","none");
		})
		
	})
});

//列表页 左侧功能
$("#detailLT dl dd").click(function(e){
	e.stopPropagation()
})
$("#detailLT dl dd h3").click(function(){
	$(this).parent().find("ul").toggle(500);
	if($(this).parent().find("ul").css("display") == "none"){
		$(this).css("background-image","url(../img/plus.png)")
	}else{
		$(this).css("background-image","url(../img/minus.png)")
	}
})
$("#detailLT dl").click(function(e){
	//console.log($(this).css("height"))
	e.stopPropagation? e.stopPropagation() : e.cancelBubble = true;
	if($(this).css("height")=="39px"){
		$(this).css({
			"height":"auto",
	        "border-bottom":"1px solid #ddd",
		})
		$(this).find("dt i").css({
			"background-position":"0 0",
	        "width":"8px",
	        "height":"5px",
	        "right":"10px",
		})
	}else{
		$(this).css({
			"height":"39px",
	        "border-bottom":"0",
		})
		$(this).find("dt i").css({
			"background-position":"-2px -6px",
	        "width":"5px",
	        "height":"8px",
	        "right":"18px",
		})
	}
	
})
