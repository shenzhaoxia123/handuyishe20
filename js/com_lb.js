//网站导航
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



//文字横向滚动
//文字横向滚动
//  function ScrollImgLeft(){ 
//   var speed=50;
//   var MyMar = null;
//   var scroll_begin = document.getElementById("scroll_begin"); 
//   var scroll_end = document.getElementById("scroll_end"); 
//   var scroll_div = document.getElementById("scroll_div"); 
//   scroll_end.innerHTML=scroll_begin.innerHTML; 
//   function Marquee(){ 
//    if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0){
//    	scroll_div.scrollLeft-=scroll_begin.offsetWidth;
//    }else{
//    	scroll_div.scrollLeft++; 
//    }
//     
//    } 
//    MyMar=setInterval(Marquee,speed); 
//    scroll_div.onmouseover = function(){
//  　　　　　　　clearInterval(MyMar);
//  　　　　　}
//   　　　　scroll_div.onmouseout = function(){
//  　　　　　　　MyMar = setInterval(Marquee,speed); 　　　　
//  　　　　　}  
//  }
//  ScrollImgLeft();
    
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