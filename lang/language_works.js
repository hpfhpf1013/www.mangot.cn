//工作原理
var ch_Language = {
	language: 'ch_Language',
	menu: ['介绍','个人','商家','开发者','入门指南','工作原理','注意事项','官网首页'],
	banner: ['FFC的工作原理','这是个经常引起混淆的问题，下面是个简明扼要的解释！'],
	con_tt: ['新用户所需了解的基本知识','余额 - 块链','交易 - 私钥','处理 - 挖矿','深入探究'],
	con_box:[
		'作为新用户，你可以开始使用FFC，而不需要理解其中的技术细节。一旦你在电脑或手机上安装一个FFC钱包，它会生成你的第一个FFC地址，并且在你需要的任何时候都可以生成更多的地址。你可以将你的地址告诉你的朋友们，他们便能够通过这个地址向你支付FFC，反之亦然。事实上，这跟电子邮件的运作方式是非常相似的，除了FFC地址应该只被使用一次。',
		'FFC块链是整个FFC网络所倚靠的公共共享总帐。所有确认的交易均包含在块链中。如此一来，FFC钱包可以计算出可用余额，并核实新的交易中消费方花费的确实是自己的FFC。块链的完整性以及时间顺序是由密码学来确保的。',
		'一笔交易是指包含在块链里的FFC钱包之间的价值转移。 FFC钱包保存着一份称作私钥或种子的保密数据用来为交易签名，即提供数学证据证明这些交易来自钱包的拥有者。这个 签名也确保交易发生后不会被任何人修改。所有的交易在用户之间广播，通常在接下来的10分钟内通过一个称作挖矿的处理过程开始被FFC网络所确认。',
		'挖矿是个将待确认的交易数据包含到块链中，从而完成对这些交易进行确认的分布式共识系统。通过挖矿，可以强制性保证块链中的数据按时间顺序存储，保持FFC网络的中立性，且允许FFC网络上不同的计算机对系统状态达成一致。交易要获得确认，必须要被打包到一个符合非常严格的密码学规则的块中，并通过FFC网络进行验证。这些规则可以防止对已有块的修改，因为一旦有改动，之后所有的块都将失效。挖矿的难度和中彩票相当，没人可以轻易地、连续地将新块加入到块链中。因此，没人可以控制块链中包含什么样的内容或者替换掉块链中的部分内容以达到减少他们的花费的目的。',
		'这只是一个非常简要的关于这个系统的概要。如果你想了解细节，你可以阅读原始论文，这篇论文描述了这个系统的设计，你也可以阅读开发者文档记录, 和了解FFC维基。'
	],
	foot: ['欢迎下载使用FFC钱包','免苹果账号版','官方安装包']
	
};

var ct_Language = {
	language: 'ct_Language',
	menu: ['介紹','個人','商家','開發者','入門指南','工作原理','註意事項','官網首頁'],
	banner: ['FFC 運作原理','這是個常令人感到困惑的問題。以下是一個快速的解釋！'],
	con_tt: ['給新手的基礎知識','餘額 - 區塊鏈','交易 - 私密金鑰','處理 - 挖礦','探索未知的世界'],
	con_box: [
		'作為一位新的用戶，您不需要明白技術細節就可以開始使用 FFC。一旦您在電腦或行動上安裝了 FFC 錢包，它就會產生您的第一個 FFC 地址，您可以在任何需要的時候創建更多的地址。您可以把您的地址披露給朋友們，以便他們可以給您付款或者反過來您給他們付款。實際上，這很像電子信箱。不過，一個 FFC 地址應當只能用一次。',
		'區塊鏈是整個 FFC 網路所依賴的共享的公開分類帳。所有經確認的交易都會存放在區塊鏈上。這樣的話，FFC 錢包可以計算它們的可用餘額和核實新的交易中將被使用的比特幣確實屬花費者所有。區塊鏈的完整性及時間順序是由密碼學來實現的。',
		'一筆交易即是被包含在區塊鏈中的 FFC 錢包之間價值的一次轉移。FFC 錢包保留一個被稱為私密金鑰或種子的秘密的數據片段。私密金鑰或種子可用來簽署交易、提供一個交易確實是由該錢包的擁有者發出的數學證明。簽章能夠防止其他人竄改過去公佈的交易。所有的交易都會在用戶之間公佈，並且通常會在接下來的10分鐘內由這個網路通過一個被稱為;挖礦的進程開始進行確認。',
		'挖礦是一種分散式的共識系統，用於確認交易並把交易加入區塊鏈之中。挖礦能確保區塊鏈的時間順序、保護網路的中立性，並且讓不同的電腦就系統的狀態取得共識。待確認的交易將會打包到某個區塊之中，而區塊必須滿足非常嚴格的密碼學規則。這些規則防止區塊被篡改，因為這樣做會導致被篡改區塊之後的區塊都變得無效。挖礦創造了一個競爭性的隨機系統，可防止任何人輕易地將連續的區塊加到區塊鏈中。藉由這個系統，沒有人能控制區塊鏈中能包含哪些交易，或是更動區塊鏈的某一部份來取消他們自己的支付。',
		'這僅僅是 FFC 系統的簡要說明，如果想瞭解更多細節，您可以閱讀原始論文，其中描述了系統的設計，您也可以閱讀開發人員文檔，您還可以探索一下FFC wiki。'
	],
	foot: ['歡迎下載使用FFC錢包','免蘋果賬號版','官方安裝包']
};

var en_Language = {
	language: 'en_Language',
	menu: ['Introduction','Individuals','Businesses','Developers','Getting started','How it works','You need to know','freefairchain'],
	banner: ['How does FFC work?',"This is a question often surrounded by confusion, so here's a quick explanation!"],
	con_tt: ['The basics for a new user','Balances - block chain','Transactions - private keys','Processing - mining','Going down the rabbit hole'],
	con_box: [
		"As a new user, you can get started with FFC without understanding the technical details. Once you've installed a FFC wallet on your computer or mobile phone, it will generate your first FFC address and you can create more whenever you need one. You can disclose your addresses to your friends so that they can pay you or vice versa. In fact, this is pretty similar to how email works, except that FFC addresses should be used only once.",
		"The block chain is a shared public ledger on which the entire FFC network relies. All confirmed transactions are included in the block chain. It allows FFC wallets to calculate their spendable balance so that new transactions can be verified thereby ensuring they're actually owned by the spender. The integrity and the chronological order of the block chain are enforced with cryptography.",
		"A transaction is a transfer of value between FFC wallets that gets included in the block chain. FFC wallets keep a secret piece of data called a private key or seed, which is used to sign transactions, providing a mathematical proof that they have come from the owner of the wallet. The signature also prevents the transaction from being altered by anybody once it has been issued. All transactions are broadcast to the network and usually begin to be confirmed within 10-20 minutes, through a process called mining.",
		"Mining is a distributed consensus system that is used to confirm pending transactions by including them in the block chain. It enforces a chronological order in the block chain, protects the neutrality of the network, and allows different computers to agree on the state of the system. To be confirmed, transactions must be packed in a block that fits very strict cryptographic rules that will be verified by the network. These rules prevent previous blocks from being modified because doing so would invalidate all the subsequent blocks. Mining also creates the equivalent of a competitive lottery that prevents any individual from easily adding new blocks consecutively to the block chain. In this way, no group or individuals can control what is included in the block chain or replace parts of the block chain to roll back their own spends.",
		"This is just a short summary of FFC. If you want to learn more of the details, you can read the original paper that describes its design, the developer documentation, or explore the FFC wiki."
	],
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
	//foot
	var foot = document.querySelectorAll('.language_foot');
	for(var i=0;i<foot.length;i++){
		foot[i].innerHTML = lang.foot[i];			
	}
}
	
//
