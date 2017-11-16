//公共头部
$("#wrap_header").load("common.html #hd_common_header",function(){
		
})

//公共尾部
//$("#wrap_footer").load("common.html #hd_common_footer",function(){
//		
//})
//banner轮播图
var index= 0;
var timer = setInterval(autoPlay,3000);
function autoPlay(){
	var i = ++index % ( $( "#hd_banner_tablist li" ).size() );
	
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
			
		}
		
		$("#hd_index_newTopicC li").mouseenter(function(){
			clearInterval(timer2);
			index2 = $(this).index();
			console.log(index2)
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
		console.log(json)
		for(var i = 0 ; i < json.length ; i++){
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












