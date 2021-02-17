/* 查询名片 */
// 提交按钮
$("#submit").click(function(){
	// 条件判断 如果输入空白内容
	if ($("#queryInput").val() == null || $("#queryInput").val().trim() == "") {
		setTimeout(function(){
			$("#queryResult *").remove();
			$("#queryResult").append("<div id='notFound'>请输入内容</div>");
		},500);
		return;
	};
	// 条件判断 如果没有名片的情况
	if (cards.length == 0) {
		setTimeout(function(){
			$("#queryResult *").remove();
			$("#queryResult").append("<div id='queryResult1'>查询结果：</div>");
		},500);
		setTimeout(function(){
			$("#queryResult").append("<div id='notFound'>未找到此名片</div>");
		},1000);
	};
	// 条件判断 遍历名片 查找相同姓名的名片
	for (var i = 0; i < cards.length; i++) {
		if ($("#queryInput").val() == cards[i].name) {
			setTimeout(function(){
				$("#queryResult *").remove();
				$("#queryResult").append("<div id='queryResult1'>查询结果：</div>");
			},500);
			setTimeout(function(){
				$("#queryResult").append("<div class='cardx'><div class='cardxx'>名片</div><div>姓名：<span id='qn'></span></div><div>手机号：<span id='qt'></span></div><div>QQ号：<span id='qq'></span></div><div>职位：<span id='qp'></span></div></div>");
				$("#qn").html(cards[i].name);
				$("#qt").html(cards[i].tel);
				$("#qq").html(cards[i].qq);
				$("#qp").html(cards[i].position);
			},1000);
			return;
		};
		if (i == cards.length - 1) {
			setTimeout(function(){
				$("#queryResult *").remove();
				$("#queryResult").append("<div id='queryResult1'>查询结果：</div>");
			},500);
			setTimeout(function(){
				$("#queryResult").append("<div id='notFound'>未找到此名片</div>");
			},1000);
		};
	};
});
// 提示变色
setInterval(function () {
	$("#notFound").css("color","blue");
},1000);
setInterval(function () {
	$("#notFound").css("color","red");
},2000);
// 返回按钮
$("#back").click(function(){
	setTimeout(function(){
		$("#query").remove();
	},500);
	functionb();
});