/* 查看名片 */
// 无名片提示变色
setInterval(function(){
	$("#noCard").css("color","blue");
},1000);
setInterval(function(){
	$("#noCard").css("color","red");
},2000);
// 返回按钮
$("#showBack").click(function(){
	setTimeout(function(){
		$("#cards").remove();
	},500);
	functionb();
});