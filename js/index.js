window.onload = function() {
	var animat = false;
	var index = 1;
	var list = document.getElementById('list');
	var dots = document.getElementById('dot').getElementsByTagName('span');
	checkIndex();
	var int = setInterval(function() { next() }, 2000);
	document.getElementById('next').onclick = function() { next() }
	
	function next() {
		if(animat) {
			return false;
		}
		var width = parseInt(list.style.left);
		var next_width = (width <= -6000) ? 0 : width - 1200;
		index = (++index > 6) ? 1 : index;
		animation(width, next_width);
	}
	
	function pre() {
		if(animat) {
			return false;
		}
		var width = parseInt(list.style.left);
		var next_width = (width >= 0) ? -6000 : width + 1200;
		index = (--index < 1) ? 6 : index;
		animation(width, next_width);
	}
	document.getElementById('pre').onclick = function() { pre() }
	
	function animation(width, next_width, one_time, interval) {
		if(animat) {
			return false;
		}
		checkIndex();
		animat = true;
		one_time = one_time || 1200;
		interval = interval || 20;
		var offset = (next_width - width) / (one_time / interval);
		go(width, offset, next_width);
	
		function go(w, offset, next_width) {
			list.style.left = w + 'px';
			w += offset;
			if(w >= next_width && width > next_width || w <= next_width && width < next_width) {
				setTimeout(function() {
					go(w, offset, next_width);
				}, interval);
			} else {
				list.style.left = next_width;
				animat = false;
			}
		}
	}
	
	function checkIndex() {
		for(var i = 0; i < dots.length; i++) {
			dots[i].className = '';
	}
	dots[index - 1].className = 'on';
	}
	for(var i = 0; i < dots.length; i++) {
		dots[i].onclick = function() {
			if(animat) {
				return false;
			}
			var new_index = this.getAttribute('index');
			var width = parseInt(list.style.left);
			var next_width = (new_index - 1) * -1200;
			index = new_index;
			animation(width, next_width);
		}
	}
	var container = document.getElementById('container');
	container.onmouseover = function() {
		clearInterval(int);
	};
	container.onmouseout = function() {
		int = setInterval(function() { next() }, 2000);
	}
	
	
	var sto = false;
	var ind = 0;
	var int_list = document.getElementById('int_list').getElementsByTagName('div');
	document.getElementById('int_next').onclick = function() { int_next() }
	document.getElementById('int_pre').onclick = function() { int_pre() }
	var int_teacher = setInterval(function() { int_next() }, 2500);
	function int_next(){
		if(sto){
			return false;
		}
		var new_ind = ((ind + 1) > 4) ? 0 : ind + 1;
		int_ani(ind,new_ind);
		ind = new_ind;
	}
	function int_pre(){
		if(sto){
			return false;
		}
		var new_ind = ((ind - 1) < 0) ? 3 : ind - 1;
		int_ani(ind,new_ind);
		ind = new_ind;
	}
	function int_ani(ind,new_ind){
		sto = true;
		var offset = 1 / (1000 / 10);
		int_list[ind].style.opacity = 1;
		int_list[new_ind].style.opacity = 0;
		int_list[new_ind].style.display = 'block';
		var x = 0;
		go();
		function go(){
			x+=offset;
			int_list[ind].style.opacity -=offset;
			int_list[new_ind].style.opacity = x;
			if(int_list[ind].style.opacity>=0){
				setTimeout(function(){go()},10);
			}else{
				int_list[ind].style.display = 'none';
				sto = false;
			}
		}
	}
	
	
	var lie = document.getElementById('lie').getElementsByTagName('li');
	document.getElementById('shang').onclick = function(){
		for(var i=0;i<lie.length;i++){
			lie[i].style.left=parseInt(lie[i].style.left) - 210+"px";
		}
	}
	
	document.getElementById('xia').onclick = function(){
		for(var i=0;i<lie.length;i++){
			lie[i].style.left=parseInt(lie[i].style.left) + 210+"px";
		}
	}
	document.getElementById('loginBtn').onclick = function(){
		document.getElementById('quan_bg').style.display = "block";
		document.getElementById('denglu').style.display = "block";
	}
	document.getElementById('tuichu').onclick = function(){
		document.getElementById('quan_bg').style.display = "none";
		document.getElementById('denglu').style.display = "none";
	}
	document.getElementById('registerBtn').onclick = function(){
		document.getElementById('quan_bg').style.display = "block";
		document.getElementById('zhuche').style.display = "block";
	}
	document.getElementById('tuichuA').onclick = function(){
		document.getElementById('quan_bg').style.display = "none";
		document.getElementById('zhuche').style.display = "none";
	}
	document.getElementById('toRegister').onclick = function(){
		document.getElementById('denglu').style.display = "none";
		document.getElementById('zhuche').style.display = "block";
	}
	document.getElementById('toLogin').onclick = function(){
		document.getElementById('denglu').style.display = "block";
		document.getElementById('zhuche').style.display = "none";
	}
	document.getElementById('showVideoBtn').onclick = function(){
		document.getElementById('quan_bg').style.display = "block";
		document.getElementById('shiping').style.display = "block";
	}
	document.getElementById('tuichuB').onclick = function(){
		document.getElementById('quan_bg').style.display = "none";
		document.getElementById('shiping').style.display = "none";
	}
	document.getElementById('user_name').onblur=function(){checkID()};
	document.getElementById('login_userId').onblur=function(){checkNum()};
	function checkNum(){
		var num = document.getElementById('login_userId').value;
		var reg_num = /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/  ;
		var check = reg_num.exec(num);
		if (!check) {
        	document.getElementById('p_phonetip').style.display='inline-block';
        	animat3 = false;
   		}else{
   			document.getElementById('p_phonetip').style.display='none';
   			animat3 = true;
   		}
	}
	function checkID(){
		var num = document.getElementById('user_name').value;
		var reg_num = /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/  ;
		var check = reg_num.exec(num);
		if (!check) {
        	document.getElementById('p_phonetipA').style.display='inline-block';
        	animat3 = false;
   		}else{
   			document.getElementById('p_phonetipA').style.display='none';
   			animat3 = true;
   		}
	}
	document.onscroll = function(){
		if((document.body.scrollTop||document.documentElement.scrollTop) >= 800){
			var xia = document.getElementById('practice').getElementsByTagName('li');
			for(var i=0;i<xia.length;i++){
				xia[i].style.animationPlayState = 'running' ;
			}
		}
		if((document.body.scrollTop||document.documentElement.scrollTop) >= 500){numberA()};
		if((document.body.scrollTop||document.documentElement.scrollTop) >= 1300){numberB()};
	}
	function numberA(){
		var xia = document.getElementById('cartoon').getElementsByTagName('li');
		for(var i=0;i<xia.length;i++){
			xia[i].style.animationPlayState = 'running' ;
		}
	}
	function numberB(){
		var xia = document.getElementById('live').getElementsByTagName('li');
		for(var i=0;i<xia.length;i++){
			xia[i].style.animationPlayState = 'running' ;
		}
	}
}
