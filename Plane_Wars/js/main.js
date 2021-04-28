'use strict';

window.onload = function() {
	myGame.init();
}
var myGame = {

	data: {
		// 子弹
		BULLET: {
			p: {
				name: 'b1',
				speed: 30
			},
			e: {
				name: 'b2',
				speed: 30
			}
		},
		// 飞机集合
		PLANE: {},
		// 敌机随机组合
		eArr: [2, 1, 3, 2, 2, 1, 1, 2, 3, 1,
			2, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			2, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 2,
			1, 0, 0, 0, 1, 1, 0, 0, 0, 2,
			2, 2, 3, 1, 1, 1, 1, 1, 1, 2
		],
		// 敌机随机参数
		ENEMY: {

			blood: [1, 10, 10, 25],
			score: [1, 15, 20, 50],
			speed: [1, 3, 1, 2],
			bullet: [false, false, true, true],
			_width: [80, 80, 80, 160],
			_height: [80, 80,80, 160]

		}

	},
	// 初始化
	init: function() {

		var layout = document.getElementById('layout'),
			mystart = document.getElementById('start'),
			score = document.getElementById('score'),
			That = this;

		this.layout = layout;
		this.mystart = mystart;
		this.score = score;

		document.getElementById('startBtn').onclick = function() {
			mystart.style.display = 'none';
			That.createPlane();
			document.getElementsByClassName('score')[0].style.display = 'block';
			// 播放背景音乐
			document.getElementById("fire").play();

		};

	},
	// 创建玩家飞机
	createPlane: function() {

		var That = this;

		var plane = document.createElement('div');
		plane.className = 'plane';
		plane.style.width = '80px';
		plane.style.left = (this.layout.offsetWidth - plane.offsetWidth) / 2 + 'px';
		this.layout.append(plane);

		this.plane = plane;
		// 创建子弹
		// setInterval: 可按照指定的周期（以毫秒计）来调用函数或计算表达式
		plane.bTimer = setInterval(function() {
			That.createBullet(That.data.BULLET.p.name, plane, 0, 1);
		}, 150);
		// 绑定事件
		this.bindPlane(plane);
		// 创建敌机
		plane.eTimer = setInterval(function() {
			That.createEnemy();
		}, 1000)
	},
	// 创建敌人
	createEnemy: function() {

		var e = this.data.eArr[~~(Math.random() * 60)];

		var ey = document.createElement('div');
		// 随机创建敌机 通过类名实现不同的类型
		ey.className = 'enemy enemy' + e;
		// 不同敌机的样式
		ey.style.cssText = 'width:' + this.data.ENEMY._width[e] + 'px; height:' + this.data.ENEMY._height[e] + 'px';
		// 随机横坐标位置
		ey.style.left = ~~(Math.random() * (this.layout.offsetWidth - this.data.ENEMY._width[e])) + 'px';
		ey.setAttribute('blood', this.data.ENEMY.blood[e]);
		ey.setAttribute('score', this.data.ENEMY.score[e]);
		ey.setAttribute('speed', this.data.ENEMY.speed[e]);
		ey.setAttribute('bullet', this.data.ENEMY.bullet[e]);
		console.dir(ey)

		this.layout.append(ey);

		// 如果是可以发射子弹的敌机 需要设置定时器创建子弹
		if (this.data.ENEMY.bullet[e]) {
			var That = this;
			// setTimeout 延迟执行   setInterval 循环执行
			ey.bTimer = setInterval(function() {
				That.createBullet(That.data.BULLET.e.name, ey, ey.offsetHeight, -1);
			}, 1500);

		}
		// 开始行动
		this.runEnemy(ey);
	},
	// 敌机运动
	runEnemy: function(obj) {
		var That = this;
		obj.timer = setInterval(function() {

			obj.style.top = (obj.offsetTop + parseInt(obj.getAttribute('speed'))) + 'px';
			// 超出屏幕 销毁
			if (obj.offsetTop > That.layout.offsetHeight) {
				clearInterval(obj.timer); // 必须清除定时器 避免内存泄漏
				obj.parentNode.removeChild(obj);
			};

			for (var i = 0, e = document.getElementsByClassName('enemy'), len = e.length; i < len; i++) {
				// 如果撞了 销毁
				if (That.TC(e[i], That.plane)) {

					clearInterval(obj.timer);
					That.gameOver();
					That.plane.parentNode.removeChild(That.plane);
					That.plane = null;
					e[i].parentNode.removeChild(e);

				}
			}

		}, 30)
	},
	// 创建子弹
	createBullet: function(name, obj, h, direction) {

		var bt = document.createElement('div');
		bt.className = name;

		var _p = obj;
		// 确定子弹初始位置  注意：玩家飞机向上发射  敌机向下发射
		bt.style.top = (_p.offsetTop + h - bt.offsetHeight * direction) - 10 + 'px';
		bt.style.left = (_p.offsetLeft + _p.offsetWidth / 2) - 4 + 'px';

		this.layout.append(bt);
		// b1  为玩家飞机
		if (bt.classList.contains('b1')) {
			// 子弹运动
			this.runBullet(bt, 0, -30);
		} else {
			// 敌机
			this.speedDecomposition(this.plane, bt);
			this.runBullet(bt, this.vx, this.vy);

		}
	},
	// 计算敌机发射的新子弹初始位置   朝向玩家飞机   斜线运动
	speedDecomposition: function(pl, bt) {

		var plleft = pl.offsetLeft,
			pltop = pl.offsetTop,
			btleft = bt.offsetLeft,
			bttop = bt.offsetTop,
			// 三角函数 平方根
			s = Math.sqrt((plleft - btleft) * (plleft - btleft) + (pltop - bttop) * (pltop - bttop)),
			sin = (pltop - bttop) / s,
			vy = 5 * sin,
			vx = Math.sqrt(5 * 5 - vy * vy);

		this.vy = vy;
		plleft > btleft ? this.vx = vx : this.vx = -vx;

	},
	// 子弹移动
	runBullet: function(b, x, y) {

		var That = this;

		b.timer = setInterval(function() {
			
			if (b.offsetTop <= 30 || b.offsetTop >= That.layout.offsetHeight || b.offsetLeft <= 0 || b.offsetLeft >= That.layout
				.offsetWidth) {
				// 超出屏幕销毁子弹
				clearInterval(b.timer);
				That.layout.removeChild(b);

			} else {

				b.style.cssText = 'top : ' + (b.offsetTop + y) + 'px; left : ' + (b.offsetLeft + x) + 'px';

			}

			for (var i = 0, EN = document.getElementsByClassName('enemy'), len = EN.length; i < len; i++) {
				
				if (That.TC(EN[i], b) && b.classList.contains('b1')) {
					// 敌人被玩家子弹碰到
					// 先销毁子弹
					clearInterval(b.timer);
					That.layout.removeChild(b);
					// 血量减1
					var Blood = EN[i].getAttribute('blood') - 1;

					if (Blood) {
						EN[i].setAttribute('blood', Blood);
					} else {
						// 敌机被消灭
						document.getElementById("boom").play();
						// 不同的敌机分数不同
						That.score.innerHTML = (parseInt(That.score.innerHTML) + parseInt(EN[i].getAttribute('score')));
						var pare = EN[i];
						EN[i].classList.remove("enemy");
						That.layout.removeChild(pare)
					}

				}

			}
			// 判断玩家飞机和 敌人子弹
			if (That.TC(That.plane, b) && b.classList.contains('b2')) {
				
				clearInterval(b.timer);
				That.layout.removeChild(b);
				That.layout.removeChild(That.plane);
				That.gameOver();

			}

		}, 30)
	},
	// 玩家飞机绑定移动事件
	bindPlane: function(p) {

		var lagoutx = this.layout.offsetLeft,
			lagouty = this.layout.offsetTop,

			lagoutw = this.layout.offsetWidth,
			lagouth = this.layout.offsetHeight;
		// 执行的时候不需要加on   绑定事件还是需要on
		p.onmousedown = function(event) {
			console.log(event)
			var px = p.offsetLeft,
				py = p.offsetTop,

				dx = event.clientX - lagoutx - p.offsetWidth / 2,
				dy = event.clientY - lagouty - p.offsetHeight / 2;

			document.onmousemove = function(event) {

				dx = event.clientX - lagoutx - p.offsetWidth / 2;
				dy = event.clientY - lagouty - p.offsetHeight / 2;

				if (dx <= 0) {
					dx = 0;
				} else if (dx >= lagoutw - p.offsetWidth) {
					dx = lagoutw - p.offsetWidth;
				}

				if (dy <= 0) {
					dy = 0;
				} else if (dy >= lagouth - p.offsetHeight) {
					dy = lagouth - p.offsetHeight;
				}

				p.style.cssText = 'left :' + dx + 'px; top :' + dy + 'px';

			}

			document.onmouseup = function(event) {

				document.onmousemove = null;

			}

		}
	},
	// 游戏结束
	gameOver: function() {

		document.getElementById("fire").pause();
		document.getElementById('bigboom').play();
		// 清楚定时器
		clearInterval(this.plane.eTimer);
		clearInterval(this.plane.bTimer);
		// 展示开始界面
		this.mystart.style.display = 'block';
		document.getElementsByClassName('score')[0].style.display = 'none';
		document.getElementById('name-over').getElementsByTagName('i')[0].innerHTML = 'GAME OVER!';
		document.getElementById('name-over').getElementsByTagName('p')[0].innerHTML = this.score.innerHTML;
		document.getElementById('startBtn').value = 'AGAIN';

		while (this.layout.hasChildNodes()) {
			this.layout.removeChild(this.layout.firstChild);
		};

		this.score.innerHTML = '0';

	},
	// 碰撞检测
	TC: function(obj1, obj2) {
		if (!obj1 ||!obj2) return
		var t1 = obj1.offsetTop,
			r1 = obj1.offsetLeft + obj1.offsetWidth,
			b1 = obj1.offsetTop + obj1.offsetHeight,
			l1 = obj1.offsetLeft,

			t2 = obj2.offsetTop,
			r2 = obj2.offsetLeft + obj2.offsetWidth,
			b2 = obj2.offsetTop + obj2.offsetHeight,
			l2 = obj2.offsetLeft;

		if (t1 > b2 || b1 < t2 || r1 < l2 || l1 > r2) {
			return false;
		} else {
			return true;
		}
	},
}
