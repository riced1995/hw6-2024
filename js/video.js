var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log('auto play is set to'+ video.autoplay);
	console.log('loop is set to'+ video.loop);

});

//Play Video//
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

//Pause Video//
document.getElementById("pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

//Slow Down Video//
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate -= 0.1;
		console.log("New video speed:", video.playbackRate);
	});

//Speed Up Video//
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate += 0.1;
	console.log("New video speed:", video.playbackRate);
});

//Skip Ahead//
document.querySelector("#skip").addEventListener("click", function () {
	var newTime = video.currentTime + 10;
	var duration = video.duration;
	if (newTime <= duration) {
		video.currentTime = newTime;
	} else {
		video.currentTime = 0;
	}
	console.log("Current location of the video:", video.currentTime);
});

//Mute and Unmute Video//
document.getElementById("mute").addEventListener("click", function () {
if (video) {
	if (video.muted) {
	console.log("Unmute Video");
	video.muted = false;
	}
	else {
		console.log("Mute Video");
		video.muted = true;
	}}
});

//Adjust Volume//
document.querySelector("#slider").addEventListener("input", function () {
	var volume = this.value / 100;
	video.volume = volume;
	var volumeSpan = document.getElementById("volume");
	volumeSpan.textContent = this.value + "%";
	console.log("Volume is " + volume);
});

//Old School//
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
	console.log("Old School Filter Applied");
});

//Original//
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
	console.log("Old School Filter Removed");
});


