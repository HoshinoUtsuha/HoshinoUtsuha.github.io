/* 添加名片 */
// 点击后去除placeholder
$("#aname").click(function(){
	$("#aname").attr("placeholder","");
});
$("#atel").click(function(){
	$("#atel").attr("placeholder","");
});
$("#aqq").click(function(){
	$("#aqq").attr("placeholder","");
});
// 提交按钮
$("#submit").click(function(){
	// 条件判断 姓名不能为空
	if ($("#aname").val() == null || $("#aname").val().trim() == "") {
		$("#remind").html("姓名不能为空！");
		return;
	};
	// 条件判断 手机号不能为空
	if ($("#atel").val() == null || $("#atel").val().trim() == "") {
		$("#remind").html("手机号不能为空！");
		return;
	};
	// 条件判断 手机号长度必须于8~15位之间
	if ($("#atel").val().length < 8 || $("#atel").val().length > 15) {
		$("#remind").html("手机号长度必须于8~15位之间！");
		return;
	};
	// 条件判断 手机号不能含有除数字外的符号
	if (isNaN(Number($("#atel").val()))) { // isNaN(number): 判断number是否为非数字NaN，是则返回true，否则为false
		$("#remind").html("手机号不能含有除数字外的符号！");
		return;
	};
	// 条件判断 QQ号不能为空
	if ($("#aqq").val() == null || $("#aqq").val().trim() == "") {
		$("#remind").html("QQ号不能为空！");
		return;
	};
	// 条件判断 QQ号长度必须于5~15位之间
	if ($("#aqq").val().length < 5 || $("#aqq").val().length > 15) {
		$("#remind").html("QQ号长度必须于5~15位之间！");
		return;
	};
	// 条件判断 QQ号不能含有除数字外的符号
	if (isNaN(Number($("#aqq").val()))) {
		$("#remind").html("QQ号不能含有除数字外的符号！");
		return;
	};
	// 条件判断 选择框必须选择学生/教师其中一项
	if ($("#position").val() < 0) {
		$("#remind").html("选择框必须选择学生/教师其中一项！");
		return;
	};
	// 条件判断 不可存储超过8个名片
	if (cards.length > 7) {
		$("#remind").css("color","red");
		$("#remind").html("名片数量超出，不可存储超过8个名片！");
		return;
	};
	// 条件判断 重复问题
	for (var i = 0; i < cards.length; i++) {
		// 姓名重复
		if ($("#aname").val() == cards[i].name) {
			$("#remind").css("color","red");
			$("#remind").html("此姓名已被注册！");
			return;
		};
		// 手机号重复
		if ($("#atel").val() == cards[i].tel) {
			$("#remind").css("color","red");
			$("#remind").html("此手机号已被注册！");
			return;
		};
		// QQ号重复
		if ($("#aqq").val() == cards[i].qq) {
			$("#remind").css("color","red");
			$("#remind").html("此QQ号已被注册！");
			return;
		};
	};
	// 判断完毕，提醒成功
	$("#remind").css("color","green");
	$("#remind").html($("#aname").val() + "提交成功！");
	// 整合数据，添加到名片容器中
	var newCard = {
		name:$("#aname").val(),
		tel:$("#atel").val(),
		qq:$("#aqq").val(),
		position:$("#position").val()
	};
	cards.push(newCard);
	// 测试
	// console.log(newCard);
	// console.log(cards);	
	// console.log(cards.length);
});
// 返回按钮
$("#back").click(function(){
	setTimeout(function(){
		$("#addForm").remove();
	},500);
	functionb();
});