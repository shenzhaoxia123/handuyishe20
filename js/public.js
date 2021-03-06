//获取非行内元素样式值
function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
//碰撞检测
function pz(obj1,obj2){
	var L1 = obj1.offsetLeft;
	var R1 = obj1.offsetLeft + obj1.offsetWidth;
	var T1 = obj1.offsetTop;
	var B1 = obj1.offsetTop + obj1.offsetHeight;
	
	var L2 = obj2.offsetLeft;
	var R2 = obj2.offsetLeft + obj2.offsetWidth;
	var T2 = obj2.offsetTop;
	var B2 = obj2.offsetTop + obj2.offsetHeight;		
	
	if( R1 < L2  ||  L1>R2 ||  B1<T2 || T1 >B2 ){ //　碰不上
		return false;	
	}else{
		return true;
	}
}
//获取任意区间值函数
function getRand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}
//获取颜色
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	for( var i = 0; i < 6 ; i++ ){
		color +=  str.charAt(getRand(0,15));
	}
	return color;
}
//获取日期时间格式函数  封装  
function dateToString(now,sign){
	sign = sign || "-";
	var y = now.getFullYear();
	var m =toTow( now.getMonth()+1 );
	var d =toTow( now.getDate() );
	var h =toTow( now.getHours() );
	var mint =toTow( now.getMinutes() );
	var s =toTow( now.getSeconds() );
	return  y + sign + m + sign + d + " " + h + ":" + mint + ":" +s;
}
function toTow(num){
	return num < 10 ? "0"+num : num;
}

//字符串转日期时间格式
function stringToDate(str){
     return new Date(str);
}

//时间差
function diff(start,end){ 
	return Math.abs( start.getTime() - end.getTime() )/1000;
}

//根据id找元素
function $(id){
	return document.getElementById(id);
}
//判断鼠标操作的是 左键？滚轮？右键？
function getButton(evt){
     var e = evt || event;
     if( evt ){    // 高版本浏览器
         return e.button;
     }else if( window.event ){ //  ie
         switch( e.button ){
               case 1 : return 0;
               case 4 : return 1;
               case 2 : return 2;
          }
     }
}

//dom操作创建元素
function create(ele){
	return document.createElement(ele);
}




// ajax get与post 封装

// url :请求路径
// callback :  该参数是一个函数，回调函数
// data :  接口的参数
function ajaxGet(url,callback,data){
	var ajax = null;
	if( window.XMLHttpRequest ){
		ajax = new XMLHttpRequest();
	}else{
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(arguments.length == 3){//表示传递的参数有三个  
		url = url + "?" + data;
	}
	ajax.open("GET",url,true);
	ajax.onreadystatechange = function(){
		if( ajax.readyState == 4 && ajax.status == 200 ){
			if(callback){
				callback(ajax.responseText);//通过函数的调用将服务器处理的结果以参数形式传递给前端
			}	 
		}
	}
	ajax.send(); 
}

function ajaxPost(url,callback,data){
	var ajax = null;
	if( window.XMLHttpRequest ){
		ajax = new XMLHttpRequest();
	}else{
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	ajax.open("POST",url);
	
	//设置请求头：
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			callback(ajax.responseText);
		}
	}	
	ajax.send(data);//向服务器端发送数据 用户名
}



// promise解决ajax异步封装
function ajaxPromise(url,data){
	if( data ){
		url = url +"?" + data;
	}
	var promise = new Promise(function(success,failed){
		var ajax = new XMLHttpRequest();
		ajax.open("GET",url);
		ajax.send();
		ajax.onreadystatechange = function(){
			if( ajax.readyState == 4 && ajax.status == 200 ){//请求数据成功
				success(ajax.responseText);
			}
		}
		//假定  5000 后  服务器没有返回任何数据 请求失败
		setTimeout(function(){
			failed();
		},5000)
	});
	return promise;
}