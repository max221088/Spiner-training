const $spinV1 = document.querySelector(".element");
let startTime = new Date().getTime();
let hightEl = 50;
console.log(startTime);
function spin1() {
	let curentTime = new Date().getTime();
	hightEl = ((((curentTime - startTime) / 1000) * 100) % 130) + 50;
	console.log(hightEl);
	$spinV1.style.cssText = "height: " + hightEl + "px;";
	requestAnimationFrame(spin1);
}
spin1();
