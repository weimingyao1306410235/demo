//时间间隔 单位毫秒 
var curIndex=0; //图片数组下标
var timeInterval=3000; //设置图片切换的时间
var arr=new Array(); //定义图片数组
arr[0]="1.jpg"; 
arr[1]="2.jpg"; 
arr[2]="3.jpg"; 
arr[3]="4.jpg"; 
arr[4]="5.jpg"; 
arr[5]="6.jpg"; 
var arr2=new Array();
arr2[0]="8.jpg";
arr2[1]="9.jpg";
arr2[2]="10.jpg";
arr2[3]="11.jpg";
arr2[4]="12.jpg";
arr2[5]="7.jpg";
setInterval(changeImg,timeInterval);
setInterval(changeImg2,timeInterval);
function changeImg() 
{ 
	var obj=document.getElementById("img1");
	if (curIndex==arr.length-1) 
	{ 
		curIndex=0; 
	} 
	else 
	{ 
		curIndex+=1; 
	} 
	obj.src="image/"+arr[curIndex];

}
function changeImg2() 
{ 
	var obj2=document.getElementById("img2");
	if (curIndex==arr.length-1) 
	{ 
		curIndex=0; 
	} 
	else 
	{ 
		curIndex+=1; 
	} 
	obj2.src="image/"+arr2[curIndex];

}