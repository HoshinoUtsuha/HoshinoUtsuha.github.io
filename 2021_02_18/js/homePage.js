// 主页消失动画
var functiona = function() {
	setTimeout(function(){
		$("#form").remove();
	},500);
	setTimeout(function(){
		$("#title1,#title2").remove();
	},1000);
}

// 主页返回动画
var functionb = function() {
	setTimeout(function(){
		var titleBack = "<div id='title1'><span>名</span> <span>片</span> <span>管</span> <span>理</span> <span>系</span> <span>统</span></div><div id='title2'>html + css + js&jquery</div><form id='form' action='#' method='get'><div id='title3'>———— 请选择模式 ————</div></form>";
		$("#wbg").append(titleBack);
	},1000);
	setTimeout(function(){
		var buttonBack = "<div id='btns'><input type='button' class='btn' id='addCard' value='添加名片'> <input type='button' class='btn' id='showCard' value='查看名片'> <input type='button' class='btn' id='queryCard' value='查询名片'> <input type='button' class='btn' id='deleteCard' value='删除名片'></div>";
		$("#form").append(buttonBack);
		var homePageScriptBack = "<script src='js/homePage.js' type='text/javascript' charset='utf-8'></script>";
		$("body").append(homePageScriptBack);
	},1500);
}

/* 按钮 */
// 添加名片按钮
$("#addCard").click(function(){
	functiona();
	setTimeout(function(){
		var addForm = "<form id='addForm'></form>";
		$("#wbg").append(addForm);
		var addName = "<div class='input'>姓名：<input type='text' class='texts' id='aname' placeholder='请输入姓名...' /></div> <!-- placeholder: 提示内容 -->";
		$("#addForm").append(addName);
	},1500);
	setTimeout(function(){
		var addTel = "<div class='input'>手机号：<input type='text' class='texts' id='atel' placeholder='请输入手机号...' /></div>";
		$("#addForm").append(addTel);
	},1800);
	setTimeout(function(){
		var addQQ = "<div class='input'>QQ号：<input type='text' class='texts' id='aqq' placeholder='请输入QQ号...' /></div>";
		$("#addForm").append(addQQ);
	},2100);
	setTimeout(function(){
		var addPosition = "<div class='input'>职位：<select id='position'><option value='-1'>请选择...</option><option value='教师'>教师</option><option value='学生'>学生</option></select></div>";
		$("#addForm").append(addPosition);
	},2400);
	setTimeout(function(){
		var addButton = "<div id='remind'></div><input type='button' id='submit' value='提交' /> <input type='button' id='back' value='返回' />";
		$("#addForm").append(addButton);
		var addCardPageScript = "<script src='./js/addCardPage.js' type='text/javascript' charset='utf-8'></script>";
		$("body").append(addCardPageScript);
	},2700);
	// 测试
	// console.log(cards);	
});

// 查看名片按钮
$("#showCard").click(function(){
	functiona();
	setTimeout(function(){
		var addShow = 	"<div id='cards'></div>";
		$("#wbg").append(addShow);
		var cardsLength = cards.length;
		// 条件判断 根据名片数量决定插入多少名片
		var noCard = "<div id='noCard'>没有名片，创建个名片吧~</div>";
		var Cardx1 = "<div class='cardx'><div class='cardxx'>名片1</div><div>姓名：<span id='n1'></span></div><div>手机号：<span id='t1'></span></div><div>QQ号：<span id='q1'></span></div><div>职位：<span id='p1'></span></div></div>";
		var Cardx2 = "<div class='cardx'><div class='cardxx'>名片2</div><div>姓名：<span id='n2'></span></div><div>手机号：<span id='t2'></span></div><div>QQ号：<span id='q2'></span></div><div>职位：<span id='p2'></span></div></div>";
		var Cardx3 = "<div class='cardx'><div class='cardxx'>名片3</div><div>姓名：<span id='n3'></span></div><div>手机号：<span id='t3'></span></div><div>QQ号：<span id='q3'></span></div><div>职位：<span id='p3'></span></div></div>";
		var Cardx4 = "<div class='cardx'><div class='cardxx'>名片4</div><div>姓名：<span id='n4'></span></div><div>手机号：<span id='t4'></span></div><div>QQ号：<span id='q4'></span></div><div>职位：<span id='p4'></span></div></div>";
		var Cardx5 = "<div class='cardx'><div class='cardxx'>名片5</div><div>姓名：<span id='n5'></span></div><div>手机号：<span id='t5'></span></div><div>QQ号：<span id='q5'></span></div><div>职位：<span id='p5'></span></div></div>";
		var Cardx6 = "<div class='cardx'><div class='cardxx'>名片6</div><div>姓名：<span id='n6'></span></div><div>手机号：<span id='t6'></span></div><div>QQ号：<span id='q6'></span></div><div>职位：<span id='p6'></span></div></div>";
		var Cardx7 = "<div class='cardx'><div class='cardxx'>名片7</div><div>姓名：<span id='n7'></span></div><div>手机号：<span id='t7'></span></div><div>QQ号：<span id='q7'></span></div><div>职位：<span id='p7'></span></div></div>";
		var Cardx8 = "<div class='cardx'><div class='cardxx'>名片8</div><div>姓名：<span id='n8'></span></div><div>手机号：<span id='t8'></span></div><div>QQ号：<span id='q8'></span></div><div>职位：<span id='p8'></span></div></div>";
		if (cardsLength == 0) {
			$("#cards").append(noCard);
		};
		if (cardsLength > 0) {
			$("#cards").append(Cardx1);
		};
		if (cardsLength > 1) {
			$("#cards").append(Cardx2);
		};
		if (cardsLength > 2) {
			$("#cards").append(Cardx3);
		};
		if (cardsLength > 3) {
			$("#cards").append(Cardx4);
		};
		if (cardsLength > 4) {
			$("#cards").append(Cardx5);
		};
		if (cardsLength > 5) {
			$("#cards").append(Cardx6);
		};
		if (cardsLength > 6) {
			$("#cards").append(Cardx7);
		};
		if (cardsLength > 7) {
			$("#cards").append(Cardx8);
		};
		// 插入名片内容
		if (cards.length > 0) {
			// 名片填入内容
			var cardGroup1 = cards[0];
			var cardGroup2 = cards[1];
			var cardGroup3 = cards[2];
			var cardGroup4 = cards[3];
			var cardGroup5 = cards[4];
			var cardGroup6 = cards[5];
			var cardGroup7 = cards[6];
			var cardGroup8 = cards[7];
			$("#n1").html(cardGroup1.name);
			$("#t1").html(cardGroup1.tel);
			$("#q1").html(cardGroup1.qq);
			$("#p1").html(cardGroup1.position);
			if (cards.length > 1) {
				$("#n2").html(cardGroup2.name);
				$("#t2").html(cardGroup2.tel);
				$("#q2").html(cardGroup2.qq);
				$("#p2").html(cardGroup2.position);
			};
			if (cards.length > 2) {
				$("#n3").html(cardGroup3.name);
				$("#t3").html(cardGroup3.tel);
				$("#q3").html(cardGroup3.qq);
				$("#p3").html(cardGroup3.position);
			};
			if (cards.length > 3) {
				$("#n4").html(cardGroup4.name);
				$("#t4").html(cardGroup4.tel);
				$("#q4").html(cardGroup4.qq);
				$("#p4").html(cardGroup4.position);
			};
			if (cards.length > 4) {
				$("#n5").html(cardGroup5.name);
				$("#t5").html(cardGroup5.tel);
				$("#q5").html(cardGroup5.qq);
				$("#p5").html(cardGroup5.position);
			};
			if (cards.length > 5) {
				$("#n6").html(cardGroup6.name);
				$("#t6").html(cardGroup6.tel);
				$("#q6").html(cardGroup6.qq);
				$("#p6").html(cardGroup6.position);
			};
			if (cards.length > 6) {
				$("#n7").html(cardGroup7.name);
				$("#t7").html(cardGroup7.tel);
				$("#q7").html(cardGroup7.qq);
				$("#p7").html(cardGroup7.position);
			};
			if (cards.length > 7) {
				$("#n8").html(cardGroup8.name);
				$("#t8").html(cardGroup8.tel);
				$("#q8").html(cardGroup8.qq);
				$("#p8").html(cardGroup8.position);
			};
		};
		var showBack = "<input type='button' id='showBack' value='返回' />";
		$("#cards").append(showBack);
		var showCardPageScript = "<script src='./js/showCardPage.js' type='text/javascript' charset='utf-8'></script>";
		$("body").append(showCardPageScript);
	},1500);
});

// 查询名片按钮
$("#queryCard").click(function(){
	functiona();
	setTimeout(function(){
		var addQuery = "<div id='query'>查询：<input type='text' id='queryInput' placeholder='请输入查询名片的姓名...'> <input type='button' id='submit' value='提交' /> <input type='button' id='back' value='返回' /><div id='queryResult'></div></div>";
		$("#wbg").append(addQuery);
		var queryCardPageScript = "<script src='./js/queryCardPage.js' type='text/javascript' charset='utf-8'></script>";
		$("#wbg").append(queryCardPageScript);
	},1500);
});

// 删除名片按钮
$("#deleteCard").click(function(){
	functiona();
	setTimeout(function(){
		var addDelete = "<div id='delete'>查询：<input type='text' id='deleteInput' placeholder='请输入查询名片的姓名...'> <input type='button' id='submit' value='提交' /> <input type='button' id='back' value='返回' /><div id='deleteResult'></div></div>";
		$("#wbg").append(addDelete);
		var deleteCardPageScript = "<script src='./js/deleteCardPage.js' type='text/javascript' charset='utf-8'></script>";
		$("#wbg").append(deleteCardPageScript);
	},1500);
});

/* 调试区域 (以下内容写入单独js文件，在运行时单独引用) */

/* 删除名片 */
/* // 提交按钮
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
			console.log(cards);
			console.log(cards.length);
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
}); */

/* 查询名片 */
/* // 提交按钮
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
}); */

/* 查看名片 */
/* // 无名片提示变色
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
}); */

/* 添加名片 */
/* // 点击后去除placeholder
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
	console.log(newCard);
	console.log(cards);	
	console.log(cards.length);
});
// 返回按钮
$("#back").click(function(){
	setTimeout(function(){
		$("#addForm").remove();
	},500);
	functionb();
}); */