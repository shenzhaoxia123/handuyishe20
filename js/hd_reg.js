
			
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
	
	//验证码随机数
	
	(function(){
		var str="0123456789abcdefABCDEF";
		con = "";
		for(var i = 0 ; i < 4;i++){
			con+= str.charAt(Math.round(Math.random()*(0,21)))
		}
		return con;
	})()
	$("#reg_list2 #reg_yzCode1").html(con)
	
	//选择注册方式
	$("#reg_select li").bind("click",function(){
		var index=$(this).index()
		$(this).css({
			"background-position":"0 -102px",
			"color":"#fff",
		}).siblings().css({
			"background-position":"0 -151px",
			"color":"#000",
		})
		if(index==0){
			$("#reg_list").css({
				"display":"block",
			})
			$("#reg_list2").css({
				"display":"none",
			})
		}
		if(index==1){
			$("#reg_list2").css({
				"display":"block",
			})
			$("#reg_list").css({
				"display":"none",
			})
		}
	})
	//手机注册正则
	//每一个表单项失去焦点时  判断内容是否合法
	//验证手机号
	flag1 = null;
	$("#reg_phone").blur(function(){
		var reg = /^1[3578]\d{9}$/;
		var str = $("#reg_phone").val();
		//console.log(str)
		if(reg.test(str)){
			flag1 = true;
			$("#reg_tishi").html("");
			$(".kyzc").show().html('<img src="../img/keyizhuce.gif"/>');
		}else{
			flag1=false;
			$("#reg_tishi").html("手机格式不合法");
			$(".kyzc").hide()
			
		}
		//console.log(flag1)
	})
	
	flag2 = null;
	$("#reg_phoneCode").blur(function(){
		var reg = /^\d{4}$/;
		var str = $("#reg_phoneCode").val();
		if(reg.test(str)){
			flag2 = true;
		}else{
			flag2=false;
		}
		//console.log(flag2)
	})
	flag3 = null;
	$("#reg_pwd1").blur(function(){			
		var reg = /^[0-9a-z]{8,24}$/i;
		var reg2 = /^\d{8,24}$/;
		var str = $("#reg_pwd1").val();
		if($("#reg_pwd1").val().length< 8){
			flag3 = false;
			$("#tishi2").html("密码长度不能少于8位");
		}else if(reg2.test(str)){
			flag3=false;
			$("#tishi2").html("密码必须为8-24位字母与数字组合");	
		}else if( reg.test(str) ){
			flag3=true;
			$("#tishi2").html('<img src="../img/keyizhuce.gif"/>');
		}
		//console.log(flag3)
	})
	flag4 = null;
	$("#reg_Qpwd1").blur(function(){
		if($("#reg_Qpwd1").val().length< 8){
			flag4 = false;
			$("#tishi3").html("密码长度不能少于8位");
		}else if($("#reg_Qpwd1").val() != $("#reg_pwd1").val()){
			flag4 = false;
			$("#tishi3").html("两次密码不一致");
		}else{
			flag4 = true;
			$("#tishi3").html('<img src="../img/keyizhuce.gif"/>');
		}
		//console.log(flag4)
	})
	//是否接受并同意协议，点中复选按钮
	flag5 = null;
	if($("#reg_checked").is(':checked')){
		flag5 = true;
	}else{
		flag5 = false;
	}
	
	
	//点击手机号注册
	function fn2(){
	
		
		if( flag1 && flag2 && flag3 && flag4 && flag5 ){
			if( getCookie("prolist")[0].phone == $("#reg_phone").val() ){
				confirm("用户名重复，重新输入");
				return false;
			}
			var arr = [];
			var json = {
				"phone":$("#reg_phone").val(),
				"pwd" : $("#reg_pwd1").val()
			}
			arr.push(json);
			setCookie("prolist",JSON.stringify(arr),1);
			confirm("注册成功");
			return true;
			
		}else{
			//alert(2);
			
			confirm("输入有错误,请重新输入！");
			
			return false;	
			
		}
		
		
	}
		

		
	//邮箱注册正则
	//每一个表单项失去焦点时  判断内容是否合法
	//验证邮箱
			flag11 = null;
		$("#reg_Email").blur(function(){
			var reg = /^\w+@\w+(\.\w+)+$/;
			var str = $("#reg_Email").val();
			//console.log(str)
			if(reg.test(str)){
				flag11 = true;
				$("#tishi11").html('<img src="../img/keyizhuce.gif"/>');
			}else{
				flag11=false;
				$("#tishi11").html("请填写Email");
				
			}
			//console.log(flag1)
		})
		

		flag22 = null;
		$("#reg_pwd11").blur(function(){			
			var reg = /^[0-9a-z]{8,24}$/i;
			var reg2 = /^\d{8,24}$/;
			var str = $("#reg_pwd11").val();
			if($("#reg_pwd11").val().length< 8){
				flag22 = false;
				$("#tishi22").html("密码长度不能少于8位");
			}else if(reg2.test(str)){
				flag22=false;
				$("#tishi22").html("密码必须为8-24位字母与数字组合");	
			}else if( reg.test(str) ){
				flag22=true;
				$("#tishi22").html('<img src="../img/keyizhuce.gif"/>');
			}
			//console.log(flag3)
		})
		flag33 = null;
		$("#reg_Qpwd11").blur(function(){
			if($("#reg_Qpwd11").val().length< 8){
				flag33 = false;
				$("#tishi33").html("密码长度不能少于8位");
			}else if($("#reg_Qpwd11").val() != $("#reg_pwd11").val()){
				flag33 = false;
				$("#tishi33").html("两次密码不一致");
			}else{
				flag33 = true;
				$("#tishi33").html('<img src="../img/keyizhuce.gif"/>');
			}
			//console.log(flag4)
		})
		flag44 = null;
		$("#reg_yz11").blur(function(){
			var str = $("#reg_yz11").val().toLowerCase();			
			var str2= $("#reg_yzCode1").html().toLowerCase();
			console.log(str)
			console.log(str2)
			if(str == str2){
				flag44 = true;
			}else{
				flag44=false;
			}
			//console.log(flag2)
		})
		//是否接受并同意协议，点中复选按钮
		flag55 = null;
		if($("#reg_checked1").is(':checked')){
			flag55 = true;
		}else{
			flag55 = false;
		}
/*	//点击邮箱注册
	function fn22(){
	
		
		if( flag1 && flag2 && flag3 && flag4 && flag5 ){
			if( getCookie("prolist2")[0].phone == $("#reg_Email").val() ){
				confirm("用户名重复，重新输入");
				return false;
			}
			var arr = [];
			var json = {
				"phone":$("#reg_Email").val(),
				"pwd" : $("#reg_pwd11").val()
			}
			arr.push(json);
			setCookie("prolist2",JSON.stringify(arr),1);
			confirm("注册成功");
			return true;
			
		}else{
			//alert(2);
			
			confirm("输入有错误,请重新输入！");
			
			return false;	
			
		}				
	}
*/	
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

