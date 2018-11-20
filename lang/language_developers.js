//开发者
var ch_Language = {
	language: 'ch_Language',
	menu: ['介绍','个人','商家','开发者','入门指南','工作原理','注意事项','官网首页'],
	banner: ['FFC开发者','FFC可以用于达成惊人成就，也可以用于满足日常所需。'],
	con_tt: ['最简单的支付系统','众多的第三方API','你可以拥有自己的财务系统','用FFC地址跟踪账单','大部分的安全保障都在客户端实现','低廉的小额支付'],
	con_box:[
		'除非付款需要自动生成发票，接受付款和支付FFC一样简单：无论是以链接还是二维码的方式。这个任何用户都可以完成的简单设定已经足以满足相当多客户的需要，尤其适用于公共场合的透明捐款和小费。',
		'很多第三方支付处理服务都提供API（应用程序接口）；你不用将FFC存储在你的服务器上，不用应付随之而产生的安全性问题。同时，大多数API都可以让您处理发票并以低廉的费率将FFC兑换成当地货币。',
		'即使你不使用任何第三方API，也可以将FFC服务直接整合到你自己的应用程序中，让你成为自己的银行和支付服务。只要你能承担相应的责任，你就能够打造出一个出色的、几乎无需费用的FFC交易系统。',
		'FFC为每一笔交易生成独立唯一的地址。所以如果您想建立一个支持发票功能的支付系统，只需为每次支付生成一个新地址并对其进行监控即可。建议您不要使用相同的地址进行多笔交易。',
		'大部分的安全性问题都由协议来处理。这意味着无需遵守PCI标准，而欺诈检测仅仅在服务或产品是即时到货的情况下才有必要。你关心的主要问题应该是将你的FFC存放在一个 安全环境中并保护那些用户可见的支付请求信息。',
		'FFC提供最低的支付手续费并且通常可以用来支付小到几美元的金额。FFC允许用于设计和实现在过去由于金融限制根本不存在的具有创新的网上服务。其中包括各种各样的小费系统和自动化支付解决方案。'
	],
	btn: 'FFC入门指南',
	foot: ['欢迎下载使用FFC钱包','免苹果账号版','官方安装包']
	
};

var ct_Language = {
	language: 'ct_Language',
	menu: ['介紹','個人','商家','開發者','入門指南','工作原理','註意事項','官網首頁'],
	banner: ['FFC開發人員應用','FFC能打造令人驚奇的事物，也能滿足日常需求'],
	con_tt: ['最簡單的支付系統','多種第三方應用程式界面 (API)','打造自己的金融系統','以 FFC 地址追蹤發票','主要安全性機制建立在客戶端','便宜小額支付'],
	con_box: [
		'除非付款需要連結自動發票，否則接受金錢就會像傳送一個比特幣一樣簡單： 只需一個連結或是 QR 碼。這種簡單的設置讓任何使用者都能輕易使用，同時也能滿足廣大層面的客戶需求。當公眾操作的時候，它特別適合用於透明捐款和小費。',
		'有許多第三方支付服務提供應用程式界面，也即API，你毋須在自己的伺服器上存放比特幣和處理相關的安全問題。而且，大多數的應用程式界面都允許您處理發票或以划算的費用將 您的比特幣兌換成當地貨幣。',
		'即使不使用任何第三方應用程式界面 (API)，你還是可以將 FFC 伺服器直接整合到你的應用程式，讓你變成自己的銀行和支付處理單位。負擔相對應的責任後，你就能打造令人驚奇的系統，處理 FFC 交易幾乎不用手續費。',
		'FFC 為每一筆交易創建一個獨一無二的地址。因此若你想建立一個自動處理發票的支付系統，你只需要為每一筆款項產生一個 FFC 地址并監控此地址。你不應該使用同一個地址來進行多筆交易而應只進行一筆交易。',
		'絕大部份的安全性問題由網路的協定處理。這意味著不需要 PCI 規範，而且只有在服務或產品在立即傳送的時候才會要求進行詐欺偵測。您應特別注意把你的比特幣存儲在一個安全的環境 并保障顯示給用戶的支付請求的安全。',
		'FFC 提供各種交易最低廉的支付手續費，並且它通常可以用於低至價值一兩美元的小額支付。FFC 允許設計和實現創新的線上服務，這些服務以往因為金融限制而無法實現，這包括各種小費系統和自動支付辦法。'
	],
	btn: '開始使用 FFC',
	foot: ['歡迎下載使用FFC錢包','免蘋果賬號版','官方安裝包']
};

var en_Language = {
	language: 'en_Language',
	menu: ['Introduction','Individuals','Businesses','Developers','Getting started','How it works','You need to know','freefairchain'],
	banner: ['FFC for Businesses','FFC is a very secure and inexpensive way to handle payments'],
	con_tt: ['The simplest of all payment systems','Many third party APIs','You can be your own bank','FFC addresses to track invoices','Most of the security is on the client side','A new world of possibilities'],
	con_box: [
		"Unless a payment needs to be associated with automatic invoices, accepting money is as simple as sending some FFC - just display an address or QR code. This simple setup is within reach of almost all users and can fulfill the needs of many clients. From an accounting perspective, it's especially suitable for reducing overhead and adding transparency.",
		"There are many third party payment processing services that provide APIs; you don't need to store FFCs on your server and handle the security that this implies. Additionally, most of these APIs allow you to process invoices and exchange your FFCs into your local currency at competitive costs.",
		"If you don't use any third party APIs, you can integrate a FFC node directly into your applications allowing you to become your own bank and payment processor. With all the responsibilities that this implies, you can build amazing systems that process FFC transactions however you would like.",
		"FFC creates a unique address for each transaction. If you were to build a payment system associated with an invoice, all you would need to do is generate and monitor a FFC address for each payment (you should never use the same address for more than one transaction).",
		"Most security is handled by the protocol, eliminating the need for PCI compliance. Fraud prevention can be simplified down to monitoring a single variable: the confirmation score. Beyond that, keeping your FFCs secure is mainly a matter of securing your wallet and using HTTPS or other secure protocols to send payment requests to customers.",
		"FFC allows you to design new and creative online services that couldn't exist before due to financial limitations. This includes tipping systems, automated payment solutions, distributed crowdfunding services, time locked payment management, public asset tracking, low-trust escrow services, micropayment channels and more."
	],
	btn: 'Get started with FFC',
	foot: ['Welcome to download the FFC Wallet','iOS OTA Download','APK Download']
	
};

//
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
	//内容标题
	var contt = document.querySelectorAll('.language_contt');
	for(var i=0;i<contt.length;i++){
		contt[i].innerHTML = lang.con_tt[i];			
	}
	//内容
	var con = document.querySelectorAll('.language_context');
	for(var i=0;i<con.length;i++){
		con[i].innerHTML = lang.con_box[i];			
	}
	//按钮
	var btn = document.querySelector('.language_btn');
	btn.innerHTML = lang.btn;	
	//foot
	var foot = document.querySelectorAll('.language_foot');
	for(var i=0;i<foot.length;i++){
		foot[i].innerHTML = lang.foot[i];			
	}
}
	
//
