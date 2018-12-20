window.onload = function(){
	var music = document.getElementById('music');
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var page3 = document.getElementById('page3');
	var audio = document.getElementsByTagName('audio')[0];
	audio.play();
	console.log(audio);
	music.addEventListener("touchstart",function(){
		if (audio.paused) {
			audio.play();
			this.children[0].setAttribute('class',"music_disc music_play");
			console.log(audio.paused);
		} else {
			this.children[0].setAttribute('class',"music_disc");
			audio.pause();
			console.log(audio.paused);
		}
	},false)
	page1.addEventListener('touchstart',function(){
		this.style.display = 'none';
		page2.style.opacity = "1";

		setTimeout(function(){
			page2.setAttribute("class","page fadeout");
			console.log(1);
			page3.setAttribute("class","page fadein");
		},3000)
	})

	// page2.addEventListener("touchstart",function(){
	// 	this.setAttribute("class","page fadeout");
	// 	page3.setAttribute("class","page fadein")
	// })

}