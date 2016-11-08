//时间间隔 单位毫秒 
var curIndex=0; //图片数组下标
var timeInterval=4000; //设置图片切换的时间
var arr=new Array(); //定义图片数组
arr[0]="damen.jpg"; 
arr[1]="library.jpg"; 
arr[2]="great-well.png"; 
arr[3]="chenguanghu.jpg"; 
arr[4]="guren.jpg"; 
arr[5]="hehua.jpg"; 
arr[6]="penshuichi.jpg";
arr[7]="tingzi.jpg";
arr[8]="winter.jpg";
arr[9]="zhaopinhui.jpg";
arr[10]="daolu.jpg";
arr[11]="snow.jpg";
setInterval(changeImg,timeInterval); 
function changeImg() 
{ 
	var obj=document.getElementById("showpic");
	if (curIndex==arr.length-1) 
	{ 
		curIndex=0; 
	} 
	else 
	{ 
		curIndex+=1; 
	} 
	obj.src="images/"+arr[curIndex];

}
window.onload=function(){//为三个按钮添加事件
	var image=document.getElementById("showpic");
	var btn_start = document.getElementById("btn_start");
	btn_start.onclick=function(){
		image.src="images/damen.jpg";
	}
	var btn_start = document.getElementById("btn_mid");
	btn_mid.onclick=function(){
		image.src="images/hehua.jpg";
	}
	var btn_end = document.getElementById("btn_end");
	btn_end.onclick=function(){
		image.src="images/snow.jpg";
	}
}