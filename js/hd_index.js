define(function(){
	return{
		fn:function(hear_use){
			//公共头部
			$("#wrap_header").load("common.html #hd_common_header",function(){
				$(".hd_xl").mouseenter(function(){
				//console.log($(this))
					$("#wzdh").show();
					
				})
				$("#wzdh").mouseleave(function(){
					$("#wzdh").hide();		
				})
				//登录后获取name名，表示已经登录			
				$("wrap_header .hd_head .hd_headR .hd_head_user").html(hear_use);
				console.log(hear_use)
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
			//banner轮播图
			var index= 0;
			var timer = setInterval(autoPlay,3000);
			function autoPlay(){
				var i = index++ % ( $( "#hd_banner_tablist li" ).size() );
				
				$("#hd_banner_tablist li").eq( i ).addClass("active").siblings().removeClass("active");
				
				$("#hd_index_ul div").eq( i ).fadeIn(300).siblings().fadeOut(300);
			}
			$("#hd_banner_tablist").on("mouseenter","li",function(){
				clearInterval(timer);
				index = $(this).index();
				autoPlay();
			}).mouseleave(function(){
				timer = setInterval(autoPlay,3000);
			})
			
			
			//互联网图标
			$("#hd_intBrand_logo").on("mouseenter","li",function(){
				
				$(this).find("img:first").css("display","none").end().find("img:last").css("display","block");
			}).on("mouseleave","li",function(){
				$(this).find("img:last").css("display","none").end().find("img:first").css("display","block");
			})
			//选项卡 明星家族
			$("#hd_starTab_tab").on("mouseenter","li",function(){
				var index = $(this).index();
				$(this).addClass("starTab_active").siblings().removeClass("starTab_active")
				$("#hd_starTab_show").find($("div")).removeClass("starTab_show")
				$("#hd_starTab_show div").eq(index).addClass("starTab_show")
			})
			
			
			//newArrival
			$.ajax({
				type:"get",
				url:"../json/newArrival.json",
				success:function(json){
					var str = "";
					var index =0;
					for(var attr in json){
						//console.log(json[attr])str=""
						var tab = json[attr]
						str="";
						for(let i = 0 ; i < json[attr].length ; i++){
							
							//console.log(json[attr][i].img)
							var tab = json[attr];
							str += `<dl>
									<dt>
										<img src="../img/${tab[i].img}" alt="" />
			   						</dt>
									<dd>
										<i>￥</i><em>${tab[i].newprice}</em><span>￥${tab[i].oldprice}</span>
										<b>立即抢购</b>
									</dd>
								</dl>`
						}
						$("#hd_newArrival_list ol").eq(index).html(str);
						index++;
						
					}
					var timer2 = setInterval(autoPlay2,3000)
					var index2 = 0;
					function autoPlay2(){
						var i = index2++ % $("#hd_index_newTopicC li").size();
			//			console.log(i)
						$("#hd_index_newTopicC li").eq(i).addClass("newTopicC_show").siblings().removeClass("newTopicC_show");
						$("#hd_newArrival_list ol").eq(i).fadeIn(800).siblings().fadeOut(800);
						$("#hd_index_newTopicC li a").css("color","#565656")
						$("#hd_index_newTopicC li a").eq(i).css("color","#fff");
						
					}
					
					$("#hd_index_newTopicC li").mouseenter(function(){
						clearInterval(timer2);
						index2 = $(this).index();
						//console.log(index2)
						autoPlay2()
						
					}).mouseleave(function(){
						timer2 = setInterval(autoPlay2,3000)
					})
					
				}
			})
			
			//Hstyle
			$("#hd_Hshow_R2 li").mouseenter(function(){
				$("#hd_Hshow_R2 li").find("h3").css("display","block");
				$(this).find("h3").css("display","none");
				$("#hd_Hshow_R2 li").find("ul").css("display","none");
				$(this).find("ul").css("display","block")
				
			
			})
					
			//HstyleList
			$.ajax({
				type:"get",
				dataType : "json",
				url:"../json/list.json",
				success:function(json){
					var str = "";
					//console.log(json)
					for(var i = 0 ; i <10 ; i++){
						str +=`<dl>
									<dt>
										<img src="../img/${json[i].img}" alt="" />
									</dt>
									<dd>
										<i>￥</i><em>${json[i].newprice}</em><span>￥${json[i].oldprice}</span>
										<b>立即抢购</b>
									</dd>
								</dl>`
					}
					$("#hd_index_HList").html(str)
				}
			})
			//DKN
			$.ajax({
				type:"get",
				dataType : "json",
				url:"../json/list.json",
				success:function(json){
					var str = "";
					
					for(var i = 10 ; i < 15 ; i++){
						str +=`<dl>
									<dt>
										<img src="../img/${json[i].img}" alt="" />
									</dt>
									<dd>
										<i>￥</i><em>${json[i].newprice}</em><span>￥${json[i].oldprice}</span>
										<b>立即抢购</b>
									</dd>
								</dl>`
						
					}
					//console.log(str)
					$("#hd_index_DList").html(str)
				}
			})
			//NANA
			$.ajax({
				type:"get",
				dataType : "json",
				url:"../json/list.json",
				success:function(json){
					var str = "";
					
					for(var i = 5 ; i < 10 ; i++){
						str +=`<dl>
									<dt>
										<img src="../img/${json[i].img}" alt="" />
									</dt>
									<dd>
										<i>￥</i><em>${json[i].newprice}</em><span>￥${json[i].oldprice}</span>
										<b>立即抢购</b>
									</dd>
								</dl>`
						
					}
					$("#hd_index_NAList").html(str)
				}
			})
			//MINI
			$.ajax({
				type:"get",
				dataType : "json",
				url:"../json/list.json",
				success:function(json){
					var str = "";
					
					for(var i = 15 ; i < 20 ; i++){
						str +=`<dl>
									<dt>
										<img src="../img/${json[i].img}" alt="" />
									</dt>
									<dd>
										<i>￥</i><em>${json[i].newprice}</em><span>￥${json[i].oldprice}</span>
										<b>立即抢购</b>
									</dd>
								</dl>`
						
					}
					$("#hd_index_MList").html(str)
				}
			})
			//NBS
			$.ajax({
				type:"get",
				dataType : "json",
				url:"../json/list.json",
				success:function(json){
					var str = "";
					//console.log(json)
					for(var i = 20 ; i < 25 ; i++){
						str +=`<dl>
									<dt>
										<img src="../img/${json[i].img}" alt="" />
									</dt>
									<dd>
										<i>￥</i><em>${json[i].newprice}</em><span>￥${json[i].oldprice}</span>
										<b>立即抢购</b>
									</dd>
								</dl>`
						
					}
					$("#hd_index_NBSList").html(str)
				}
			})
			//首页邮箱
			 $("#wqhDy_btn").click(function(){
			 	
			 	var reg = /^\w+@\w+(\.\w+)+$/;
			 	str = $("#wqhDy_txt").val();
			 	if(reg.test(str)){
			 		$(".emailjl").html("邮箱已保存").show()
			 	}else{
			 		$(".emailjl").html("邮箱不合法").show()
			 	}
			 	
			 })
			 //10s后订阅提示自动消失
			 setTimeout(function(){
			 	$(".emailjl").hide()
			 },10000)
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
		}
	}
})











