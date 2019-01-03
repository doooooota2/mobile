$(function(){
	setTimeout(function(){
		$(".boy1").animate({right:"20rem"},2500)
		setTimeout(function(){
			$(".girl")[0].style.animation = "gm 2s 0s steps(8) forwards";
			$(".boy1").removeClass("boy-walk");
			$(".boy1").addClass("boy-stand");
			console.log('test');
		},2500)
	},22000)
	
	
})