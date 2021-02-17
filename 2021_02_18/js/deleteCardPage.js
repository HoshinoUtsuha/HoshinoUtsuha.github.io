/* 删除名片 */
// 提交按钮
$("#submit").click(function(){
	// 条件判断 如果输入空白内容
	if ($("#deleteInput").val() == null || $("#deleteInput").val().trim() == "") {
		setTimeout(function(){
			$("#deleteResult *").remove();
			$("#deleteResult").append("<div id='deleteFailed'>请输入内容</div>");
		},500);
		return;
	};
	// 条件判断 如果没有名片的情况
	if (cards.length == 0) {
		setTimeout(function(){
			$("#deleteResult *").remove();
			$("#deleteResult").append("<div id='deleteResult1'>删除结果：</div>");
		},500);
		setTimeout(function(){
			$("#deleteResult").append("<div id='deleteFailed'>未找到此名片</div>");
		},1000);
	};
	// 条件判断 遍历名片 查找相同姓名的名片
	for (var i = 0; i < cards.length; i++) {
		if ($("#deleteInput").val() == cards[i].name) {
			cards.splice(i,1); // 从第i项开始，删除1项，完成删除数组中指定元素
			// 测试
			// console.log(cards);
			// console.log(cards.length);
			setTimeout(function(){
				$("#deleteResult *").remove();
				$("#deleteResult").append("<div id='deleteResult1'>删除结果：</div>");
			},500);
			setTimeout(function(){
				$("#deleteResult").append("<div id='deleteSuccess'>删除成功</div>");
			},1000);
			return;
		};
		if (i == cards.length - 1) {
			setTimeout(function(){
				$("#deleteResult *").remove();
				$("#deleteResult").append("<div id='deleteResult1'>删除结果：</div>");
			},500);
			setTimeout(function(){
				$("#deleteResult").append("<div id='deleteFailed'>未找到此名片</div>");
			},1000);
		};
	};
});
// 提示变色
setInterval(function () {
	$("#deleteSuccess,#deleteFailed").css("color","blue");
},1000);
setInterval(function () {
	$("#deleteSuccess,#deleteFailed").css("color","red");
},2000);
// 返回按钮
$("#back").click(function(){
	setTimeout(function(){
		$("#delete").remove();
	},500);
	functionb();
});