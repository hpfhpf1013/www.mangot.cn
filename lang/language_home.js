//首页
var ch_Language = {
	language: 'ch_Language',
	menu: ['介绍','个人','商家','开发者','入门指南','工作原理','注意事项','官网首页'],
	banner: ['激活你的数字资产','安全、便捷、高效的数字资产管理工具','免苹果账号版','安装说明&nbsp;&gt;','官方安装包','安装说明&nbsp;&gt;'],
	con1: ['安全放心，FFC钱包','从此无需混乱的工具，管理你的数字资产。用户数据自主管理，无需依赖第三方服务商，避免隐私数据泄漏。','跨越国界，触手可及','FFC让国界消失！随时随地，轻松实现快速免费的跨境转账。向银行和长时间的排队等待说再见！','数字资产，尽在掌控','FFC作为专业数字资产钱包，安全放心、简单易用；支持多币种管理与兑换，让区块链技术更好地融入你的生活。'],
	con2: ['行情','瞬息万变，一手掌握','币圈','看看圈内怎么说'],
	about: ['Treasures Palace Technology Co.Ltd在2018年创造了FFC生态链，一个专注于区块链领域的公司，为数百万区块链领域的用户提供安全、便捷的数字资产服务。','FFC作为专业数字资产钱包，安全放心、简单易用，支持多币种管理与兑换，让区块链技术更好的融入你的生活。','透过建立最好的钱包，FFC期望让更多的人都能方便的使用我们的产品，最终加速与扩大区块链在个人身分管理上的应用。更多个人资料如银行帐号，身份证号和医疗病例目前都还存放在中央的资料库裡，透过区块链的技术，上述的一切都有可能由您自己掌控，未来也将会更符合我们的期待！'],
	foot: ['欢迎下载使用FFC钱包','免苹果账号版','官方安装包']
	
};

var ct_Language = {
	language: 'ct_Language',
	menu: ['介紹','個人','商家','開發者','入門指南','工作原理','註意事項','官網首頁'],
	banner: ['激活妳的數字資產','安全、便捷、高效的數字資產管理工具','免蘋果賬號版','安裝說明&nbsp;&gt;','官方安裝包','安裝說明&nbsp;&gt;'],
	con1: ['安全放心，FFC錢包','從此無需混亂的工具，管理妳的數字資產。用戶數據自主管理，無需依賴第三方服務商，避免隱私數據泄漏。','跨越國界，觸手可及','FFC讓國界消失！隨時隨地，輕松實現快速免費的跨境轉賬。向銀行和長時間的排隊等待說再見！','數字資產，盡在掌控','FFC作為專業數字資產錢包，安全放心、簡單易用；支持多幣種管理與兌換，讓區塊鏈技術更好地融入妳的生活。'],
	con2: ['行情','瞬息萬變，壹手掌握','幣圈','看看圈內怎麽說'],
	about: ['Treasures Palace Technology Co.Ltd在2018年創造了FFC生態鏈，壹個專註於區塊鏈領域的公司，為數百萬區塊鏈領域的用戶提供安全、便捷的數字資產服務。','FFC作為專業數字資產錢包，安全放心、簡單易用，支持多幣種管理與兌換，讓區塊鏈技術更好的融入妳的生活。','透過建立最好的錢包，FFC期望讓更多的人都能方便的使用我們的產品，最終加速與擴大區塊鏈在個人身分管理上的應用。更多個人資料如銀行帳號，身份證號和醫療病例目前都還存放在中央的資料庫裡，透過區塊鏈的技術，上述的壹切都有可能由您自己掌控，未來也將會更符合我們的期待！'],
	foot: ['歡迎下載使用FFC錢包','免蘋果賬號版','官方安裝包']
};

var en_Language = {
	language: 'en_Language',
	menu: ['Introduction','Individuals','Businesses','Developers','Getting started','How it works','You need to know','freefairchain'],
	banner: ['Activate your digital assets','A safe, convenient and efficient digital asset management tool','iOS OTA Download','Explain&nbsp;&gt;','APK Download','Explain&nbsp;&gt;'],
	con1: ['Safety and reassuring','There is no need for messy tools to manage your digital assets. User data is autonomously managed without relying on third party service providers to avoid privacy data leakage.','Cross national boundaries','FFC let national borders disappear! At any time and anywhere, it is easy to realize fast and free cross border transfer. Say goodbye to the bank and a long queue.','all in control','FFC, as a professional digital asset wallet, is safe and easy to use. It supports multi currency management and convertibility, so that the technology of district chain can better integrate into your life.'],
	con2: ['Quotation','A fast changing, one hand Mastery','Coin circle',"Look at what's going on in the circle"],
	about: ['Treasures Palace Technology Co.Ltd The FFC ecological chain was created in 2018, A company focused on the area of block chain, provided a secure and convenient digital asset service for millions of block chain users.','FFC As a professional digital asset purse, it is safe, easy to use, supports multi currency management and convertibility, and enables District chain technology to better integrate into your life.','Through the establishment of the best purse, FFC expects more people to make it easy to use our products and eventually accelerate and expand the application of the block chain in personal identity management. More personal data such as bank account, ID card number and medical case are still stored in the central database. Through the block chain technology, all of the above can be controlled by yourself, and the future will be more in line with our expectations!'],
	foot: ['Welcome to download the FFC Wallet','iOS OTA Download','APK Download']
	
};

if(sessionStorage.getItem('langSwitch')){
	langFN(eval(sessionStorage.getItem('langSwitch')));	
}

function langFN(lang){
	sessionStorage.setItem('langSwitch',lang.language);
	//导航
	var menus = document.querySelectorAll('.language_nemu');
	var menusAPP = document.querySelectorAll('.language_APPnemu');	
	for(var i=0;i<menus.length;i++){
		menus[i].innerHTML = lang.menu[i];			
		menusAPP[i].innerHTML = lang.menu[i];			
	}
	//banner
	var benners = document.querySelectorAll('.language_banner');
	for(var i=0;i<benners.length;i++){
		benners[i].innerHTML = lang.banner[i];			
	}
	//con1
	var con1 = document.querySelectorAll('.language_con1');
	for(var i=0;i<con1.length;i++){
		con1[i].innerHTML = lang.con1[i];			
	}
	//con2
	var con2 = document.querySelectorAll('.language_con2');
	for(var i=0;i<con2.length;i++){
		con2[i].innerHTML = lang.con2[i];			
	}
	//about
	var about = document.querySelectorAll('.language_about');
	for(var i=0;i<about.length;i++){
		about[i].innerHTML = lang.about[i];			
	}
	//foot
	var foot = document.querySelectorAll('.language_foot');
	for(var i=0;i<foot.length;i++){
		foot[i].innerHTML = lang.foot[i];			
	}
}
	
//


