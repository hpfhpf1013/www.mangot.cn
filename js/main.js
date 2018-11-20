locationApp = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? true :  false;
if(!locationApp){
	var ios = document.querySelectorAll('.is-ios');
	var android = document.querySelectorAll('.is-android');
	var QRcode1 = document.querySelectorAll('.QRcode1');
	var QRcode2 = document.querySelectorAll('.QRcode2');
	codeFn(0);
	codeFn(1);
	function codeFn(nb){
		ios[nb].onmousemove = function(){
			QRcode1[nb].style.display = 'block';
		}
		ios[nb].onmouseout = function(){
			QRcode1[nb].style.display = 'none';
		}
		android[nb].onmousemove = function(){
			QRcode2[nb].style.display = 'block';
		}
		android[nb].onmouseout = function(){
			QRcode2[nb].style.display = 'none';
		}	
	}	
}

/*语言切换*/
var lang = document.querySelector('.dl-navbar-link-flag');
var lanbox = document.querySelector('.LanguageSwitching');
lang.onclick = function(ev){
	if(lanbox.style.display == 'block'){
		lanbox.style.display = 'none';
		return;
	}
	lanbox.style.display = 'block';
	ev.cancelBubble=true;
	
}
document.body.onclick = function(ev){
	lanbox.style.display = 'none';
	ev.cancelBubble=true;
}

/*介绍 —— 菜单显示隐藏*/
var aboutNav = document.querySelector('.aboutShow');
var aboutBox = document.querySelector('.aboutBox');
aboutNav.onmousemove = function(){
	aboutBox.style.display = 'block';
}
aboutNav.onmouseout = function(){
	aboutBox.style.display = 'none';
}

/*手机菜单显示隐藏*/
if(locationApp){
	var appNav = document.querySelector('.appNav');	
	var appNavlist = document.querySelector('.appNavList');	
	appNav.onclick = function(ev){
		if(appNavlist.style.display == 'block'){
			appNavlist.style.display = 'none';
			return;
		}
		appNavlist.style.display = 'block';
		ev.cancelBubble=true;
	}
	
	appNavlist.onclick = function(ev){
		appNavlist.style.display = 'block';
		ev.cancelBubble=true;
	}
	
	document.body.onclick = function(ev){
		appNavlist.style.display = 'none';
		ev.cancelBubble=true;
	}
	
}
