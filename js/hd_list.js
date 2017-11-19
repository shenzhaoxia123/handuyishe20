define(function(){
	function fn(){
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
		})
			//console.log("1")
		$("#detail_bottom").on("click","li",function(){
			//console.log($("#detail_bottom").find("s"));
			var index = $(this).index();
			$("#detail_bottom").find("s").hide();
			$(this).find("s").show();
			
			$(this).css({
				"border-color":"#c80a28",
			}).siblings().css({
				"border-color":"#fff",
			})
			$("#detail_small img").eq(index).show().siblings().hide();
			$("#detail_big img").eq(index).show().siblings().hide();
		})
		$("#detail_small").mouseenter(function(){
			//console.log($(this))
			$("#detail_big").show();
			$("#mask").show();
			$("#layer").show();
			
		}).mouseleave(function(){
			$("#detail_big").hide();
			$("#mask").hide();
			$("#layer").hide();
		}).mousemove(function(e){
			var e = e||event;
				var x = e.pageX-$("#detail_small").offset().left-$("#mask").outerWidth()/2;
				var y = e.pageY-$("#detail_small").offset().top-$("#mask").outerHeight()/2;
				var maxL= $("#detail_small").outerWidth()-$("#mask").outerWidth();
				var maxT= $("#detail_small").outerHeight()-$("#mask").outerHeight();
				x=Math.min(maxL,Math.max(0,x));
				y=Math.min(maxT,Math.max(0,y));
				$("#mask").css({
					"left":x,
					"top":y,
				})
				var bigImgX = x*$(".bigImage").width()/$("#detail_small").width();
				var bigImgY = y*$(".bigImage").height()/$("#detail_small").height();
				
				$(".bigImage").css({
					"left":-bigImgX,
					"top":-bigImgY
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
		//选择尺码
		$(".sel_size").on("click","li:not(li:last)",function(){
			//console.log( $(this).find("span").html() )
			var sizeHtml = $(this).find("span").html() ;
			$(".Qselecthtml1").html(sizeHtml)
			$(".sel_size").find("li").css({
				"border":"1px solid #ddd"
			})
			$(this).css({
				"border":"1px solid #c80a28"
			})
			$(this).parent().find("s").hide();
			$(this).find("s").show();	
		})
		
		//选择颜色
		//买几件
		$(".sel_num_sub").click(function(){
			numVal = $(".sel_num_status").val()
			//console.log(numVal)
			
			if(numVal > 1){
				numVal--;
				$(".sel_num_status").val(numVal)
			}
		})
		$(".sel_num_add").click(function(){
			numVal = $(".sel_num_status").val()
			numVal++;
			$(".sel_num_status").val(numVal)
		})
		//鼠标滑过显示微信
		$(".showWeChat").bind("mouseenter",function(){
			$(".weshow").show();
		}).bind("mouseleave",function(){
			$(".weshow").hide();
		})
		
		//加入购物车
		$("#detail_cart").click(function(){
			location.href = "hd_cart.html"
		})
		
		//选项卡
		$("#hd_detailTab_TopBox").on("click","li",function(){
			var index = $(this).index();
			//console.log($(this))
			$("#hd_detailTab_TopBox").find("li").css({
				"border-top":"0",
				"background":"#fff"
			})
			$(this).css({
				"border-top":"4px solid #c80a28",
				"background":"#f5f3f0"
			})
			console.log($("#hd_detailTab_TopImgOrTalk").find(".xxss"))
			$("#hd_detailTab_TopImgOrTalk").find(".xxss").hide();
			$("#hd_detailTab_TopImgOrTalk").find(".xxss").eq(index).show();
		})
		
		//吸顶 和 侧边栏
		window.onscroll = function(){
		//	console.log($("html,body").scrollTop())
			if($("html,body").scrollTop()>400){
				$("#xiding").css("display","block")
				$("#celan").css("display","block")
				$("#celan li").last().click(function(){
					$("html,body").animate({"scrollTop":0},500)
				})
		
			}else{
				$("#xiding").css("display","none")
				$("#celan").css("display","none")
				
			}
			if($("html,body").scrollTop()>700){
				$("#hd_detailTab_Top").css({
					"position":"fixed",
					"top":0,
					"z-index":'111',
				})
			}else{
				$("#hd_detailTab_Top").css({
					"position":"relative",
				})
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
	}
	return{
		fn:fn,
	}
})






