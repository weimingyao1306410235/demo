window.onload=function  () {
			  var canvas=document.getElementById("canvas1");
			  var cobj=canvas.getContext("2d");
			  cobj.translate(250,250);
              var focusLen=300;
			  var points=[
			    {x_3d:-50,y_3d:-50,z_3d:-50},
				{x_3d:50,y_3d:-50,z_3d:-50},
				{x_3d:50,y_3d:50,z_3d:-50},
				{x_3d:-50,y_3d:50,z_3d:-50},

				{x_3d:-50,y_3d:-50,z_3d:50},
				{x_3d:50,y_3d:-50,z_3d:50},
				{x_3d:50,y_3d:50,z_3d:50},
				{x_3d:-50,y_3d:50,z_3d:50},
			  ]
			  setInterval(function  () {
			     cobj.clearRect(-200,-200,500,500);
				  var points2d=[];
				  for (var i=0; i<points.length; i++) {
					var newxyz=rectarr([1,-1,1],10*Math.PI/180,[points[i].x_3d,points[i].y_3d,points[i].z_3d,]);
					points[i].x_3d=newxyz[0];
					points[i].y_3d=newxyz[1];
					points[i].z_3d=newxyz[2];
					 var obj= change2d (newxyz[0],newxyz[1],newxyz[2],focusLen);
					points2d.push(obj);
				  }
             
               drawRect (cobj,points2d)
			  },100)
			
   
			}

			function change2d (x_3d,y_3d,z_3d,focusLen) {
			  var xy={};
			  var scales=focusLen/(focusLen+z_3d);
              xy.x=x_3d*scales;
			  xy.y=y_3d*scales;
			  return xy;
			}

			function drawRect (cobj,points2d) {
			  cobj.beginPath();
			  cobj.moveTo(points2d[0].x,points2d[0].y);
			  cobj.lineTo(points2d[1].x,points2d[1].y);
			  cobj.lineTo(points2d[2].x,points2d[2].y);
			  cobj.lineTo(points2d[3].x,points2d[3].y);
			  cobj.closePath();
			  cobj.stroke()


			  cobj.beginPath();
			  cobj.moveTo(points2d[4].x,points2d[4].y);
			  cobj.lineTo(points2d[5].x,points2d[5].y);
			  cobj.lineTo(points2d[6].x,points2d[6].y);
			  cobj.lineTo(points2d[7].x,points2d[7].y);
			  cobj.closePath();
			  cobj.stroke()

			  cobj.beginPath();
			  cobj.moveTo(points2d[0].x,points2d[0].y);
			  cobj.lineTo(points2d[4].x,points2d[4].y);
			  cobj.lineTo(points2d[7].x,points2d[7].y);
			  cobj.lineTo(points2d[3].x,points2d[3].y);
			  cobj.closePath();
			  cobj.stroke()


			  cobj.beginPath();
			  cobj.moveTo(points2d[1].x,points2d[1].y);
			  cobj.lineTo(points2d[5].x,points2d[5].y);
			  cobj.lineTo(points2d[6].x,points2d[6].y);
			  cobj.lineTo(points2d[2].x,points2d[2].y);
			  cobj.closePath();
			  cobj.stroke()
			}

		//xiangl: 也就是3维旋转轴
		//theta:  旋转的度数
		//xyzArr: 旋转以后的x,y,z的值
		function rectarr (xiangl,theta,xyzArr) {
			var sqrt = Math.sqrt(xiangl[0] * xiangl[0] + xiangl[1] * xiangl[1] + xiangl[2] * xiangl[2]);
			var u = xiangl[0] / sqrt;
			var v = xiangl[1] / sqrt;
			var w = xiangl[2] / sqrt;
			var newarr = [];
			newarr[0]= [
			 Math.cos(theta) + (u * u) * (1 - Math.cos(theta)) ,
			     u * v * (1 - Math.cos(theta)) + w * Math.sin(theta),
			     u * w * (1 -Math.cos(theta)) - v * Math.sin(theta),
			     0
			 ];

			newarr[1] = [
			 u * v * (1 - Math.cos(theta)) - w * Math.sin(theta),
			     Math.cos(theta) + v * v * (1 - Math.cos(theta)),
			     w * v * (1 - Math.cos(theta)) + u * Math.sin(theta),
			     0
			 ];

			newarr[2]= [
			 u * w * (1 - Math.cos(theta)) + v * Math.sin(theta),
			     v * w * (1 - Math.cos(theta)) - u * Math.sin(theta),
			     Math.cos(theta) + w * w * (1 - Math.cos(theta)),
			     0
			 ];

			newarr[3] = [
			   0,
			    0,
			    0,
			    1
			];
			//计算旋转以后的值
			var arr = [];
			for (var i=0; i<newarr.length; i++) {
				var val = 0;
				for (var j=0; j<xyzArr.length; j++) {
					val +=  newarr[i][j] * xyzArr[j];
				}
				arr.push (val);
			}
			return arr;
		}
/************************旋转正方体*********************/ 
window.onload=function  () {
			 var canvas=document.getElementById("canvas2");
			 var cobj=canvas.getContext("2d");
             cobj.translate(250,250);
             var arr=[];
			 for (var i=0; i<8; i++) {
			   var arcObj={
			     r:15+5*Math.random(),x_3d:-200+i*30,y_3d:-100+200*Math.random(),z_3d:i*10,
				 z_speed:10+10*Math.random()
			   }

			   arr.push(arcObj);
			 }
             var focusLen=300   
			 setInterval(function  () {
			   cobj.clearRect(0,0,500,500);
                 var newarr=arr.sort(function  (a,b) {
				   return a.z_3d<b.z_3d;
                 })
			     for (var i=0; i<newarr.length; i++) {
			     
						  arr[i].z_3d+=arr[i].z_speed;
						   if(arr[i].z_3d>600||arr[i].z_3d<=-50){
							 arr[i].z_speed*=-1;
							}
						
						 var scales=focusLen/(focusLen+arr[i].z_3d);
						 var x= arr[i].x_3d*scales;
						 var y= arr[i].y_3d*scales
						 cobj.save();
						 cobj.translate(x,y);
						 cobj.scale(scales,scales)
						 cobj.beginPath();
						 var colorObj=cobj.createRadialGradient(3,3,0,0,0,15); 
						 colorObj.addColorStop(0,"#cbc0f3");
						 colorObj.addColorStop(1,"#06198b");
						 cobj.fillStyle=colorObj;
						 cobj.arc(0,0,15,0,2*Math.PI);
						 cobj.fill();
						 cobj.restore();
				 }
			 },50)
			}
