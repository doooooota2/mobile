$(function(){
	$('.boy').animate({top:'70%',left:'-30rem',width:'25rem',height:'10rem'},8000)
	setTimeout(function(){$('.boy').addClass('boy-right');},8000);
	setTimeout(function(){
		$('.boy').removeClass('boy-move');
		setTimeout(function(){
			var page = document.getElementById("page");
			page.value = "page-b";
			if("createEvent" in document){
				var evt = document.createEvent("HTMLEvents");
				evt.initEvent("change",false,true);
				page.dispatchEvent(evt);
			}else{
				page.fireEvent("onchange");
			}
			console.log(page);
		},2000);
	},12000);
	$('.boy').animate({top:'80%',left:'65rem',width:'40rem',height:'16rem'},4000)
})