$(function(){
	$('.boy').animate({top:'70%',left:'-30rem',width:'25rem',height:'10rem'},8000)
	setTimeout(function(){$('.boy').addClass('boy-right');},8000);
	setTimeout(function(){$('.boy').removeClass('boy-move');},12000);
	$('.boy').animate({top:'80%',left:'65rem',width:'40rem',height:'16rem'},4000)
})