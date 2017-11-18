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
	e.stopPropagation();	
})
$("#detailLT dl dd h3").click(function(){	
	if($(this).parent().find("ul").css("display") == "none"){
		$(this).css("background-image","url(../img/minus.png)");
		$(this).parent().find("ul").show();
	}else{
		$(this).css("background-image","url(../img/plus.png)");
		$(this).parent().find("ul").hide();
	}
	//$(this).parent().find("ul").toggle(500);
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

//列表页 右侧功能

//列表页 商品ajax商品请求
var index = 1;
$.ajax({
	type:"get",
	dataType : "json",
	url:"../json/hd_detail.json",
	success:function(arr){
		total = Math.ceil(arr.length/40);
		//console.log(arr[71].img)//总页数
		showData(index,arr);
		//分页查找 使用
		$(".M-box").pagination({
			pageCount:total,
			callback:function(api){
				var data = {
					page:api.getCurrent(),//返回当前页码
					name:'mss',
					say:'oh',
				};
				var index = data.page; // 页码
				$.getJSON('../json/hd_detail.json',function(arr){
		            showData(index,arr);
		        });
			}
		});
	}
});
function showData(index,arr){
	var str = "";
		//console.log(arr)
		for(var i = (index-1)*40 ; i <index*40 ; i++){
			//console.log(arr[i].img)
			if(i < arr.length){
				console.log(arr[i].img)
				str+=`<div class="detail_product">
						<div class="detail_product_wrap">
							<img src="../img/${arr[i].img}" alt="" />
							<b>
								<img src="../img/${arr[i].img}" alt="" />
							</b>
							<p class="product_price">
								<span><em>￥</em>${arr[i].newprice}</span>
								<span>￥${arr[i].oldprice}</span>
							</p>
							<p class="product_title">
								<a href="#">韩都衣舍2016秋装韩版百搭上衣打底衬衣立领韩范长袖衬衫女AA5041</a>
								
							</p>
							<p class="product_status">
								<span>
									<em>${arr[i].num}</em>
									<br />
									月销量
								</span>
								<span>
									<em>${arr[i].evalnum}</em>
									<br />
									累计评价
								</span>
							</p>
						</div>
					</div>`
			}
			
		}
		$("#detailRF_wrap").html(str)
}



//鼠标滑过商品详情
//$(".detail_product_wrap").mouseenter(function(){
//	$(this).parent().css({
//		"z-index":"2"
//	})
//	$(this).css({
//		"height":"auto",
//		"border":"2px solid #c80a28"
//	}).find(".product_title").css({
//		"height":"40px",
//	})
//}).mouseleave(function(){
//	$(this).parent().css({
//		"z-index":"1"
//	})
//	$(this).css({
//		"height":"363px",
//		"border":"1px solid #ddd"
//	}).find(".product_title").css({
//		"height":"18px",
//	})
//})
//由于ajax 动态生成的元素  需要利用 事件委托 给动态生成的元素 添加事件
$("#detailRF_wrap").on("mouseenter",".detail_product_wrap",function(){
	$(this).parent().css({
		"z-index":"2"
	})
	$(this).css({
		"height":"auto",
		"border":"2px solid #c80a28"
	}).find(".product_title").css({
		"height":"40px",
	})
}).on("mouseleave",".detail_product_wrap",function(){
	$(this).parent().css({
		"z-index":"1"
	})
	$(this).css({
		"height":"363px",
		"border":"1px solid #ddd"
	}).find(".product_title").css({
		"height":"18px",
	})
})

//公共尾部
$("#wrap_footer").load("common.html #hd_common_footer",function(){
	//公共特效 尾部 友情链接 文字向左滚动
	$(function() {
		var num = 0;
		function goLeft() {
			//750是根据你给的尺寸，可变的
			if (num == -60) {
				num = 0;
			}
			num -= 1;
			$(".footer_scroll").animate({"left":num},100)
		}
	//设置滚动速度
	var timer = setInterval(goLeft, 300);
	//设置鼠标经过时滚动停止
	$("#scroll_div").hover(
		function() {
			clearInterval(timer);
		},function() {
			timer = setInterval(goLeft, 300);
		})
	})
})

//侧边栏
//吸顶 和 侧边栏
window.onscroll = function(){
//	console.log($("html,body").scrollTop())
	if($("html,body").scrollTop()>770){
		$("#xiding").css("display","block")
		$("#celan").css("display","block")
		$("#celan li").last().click(function(){
			$("html,body").animate({"scrollTop":0},500)
		})

	}else{
		$("#xiding").css("display","none")
		$("#celan").css("display","none")
		
	}
}

//cebianlan
$("#celan li").each(function(index){
	$(this).css({"backgroundPositionX":"0px","backgroundPositionY":(-83*index-3)+"px"})
})
$("#celan").on("mouseenter","li",function(){
	var index = $(this).index();
	//$(this).css("display","block")
	$(this).css({"backgroundPositionX":"-77px","backgroundPositionY":(-83*index-3)+"px"})
	
}).on("mouseleave","li",function(){
	var index = $(this).index();	
	$(this).css({"backgroundPositionX":"0px","backgroundPositionY":(-83*index-3)+"px"})
})
