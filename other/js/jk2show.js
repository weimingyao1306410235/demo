window.alert("开始查询!");
function showtable(num)
{
	 var tab="<center>"
	 tab+='<table  border ="1" align="center" width="900"><caption><font size="7px">计科2班学生名单</font></caption><thead><tr><td align="center" >学号</td><td align="center">姓名</td><td align="center">性别</td><td align="center">上课状况</td></tr></thead>';//table中不能加height属性

		for(var i=0; i<num;++i)
		{
		var ys ="green";
			if(i%2==0)
				bg="#cccccc";
			else
				bg="#ffffff";
			tab+='<tr  bgcolor="'+bg+'">';
			//tab+='<onmouseover="function({bgColor = "red";})" onmouseout="function({obj.bgColor = ys;})">'//鼠标放上去或离开调用不同的匿名函数来显示不同的颜色
			for(var j=0; j<3; ++j)
			{
				var stuinfo = stu[i][j];
					tab+="<td align='center'>"+stuinfo+"</td>";
			}
			tab+="<td align='center'>"+"<select name=status>"+"<option selected>按时上课<option>迟到<option>旷课</select></td>"
			tab+="</tr>";
		}
		tab+="</table></center>";
		document.write(tab);
		window.alert("开始点名!");
}