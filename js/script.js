const $spinV1 = document.querySelectorAll(".element");
console.log($spinV1);
let startTime = new Date().getTime();
let hightEl = null;
let hightEl2 = [];

function spin1() {
	let curentTime = new Date().getTime();
	hightEl2 = [];
	for (let i = 0; i < $spinV1.length; i++) {
		let dal = 250 * i;
		hightEl = Math.sin((((curentTime - startTime + dal) / 1000) * 2) % 90);
		hightEl = Math.abs(hightEl) * 100 + 50;
		hightEl2.push(hightEl);
		//console.log(hightEl2);
	}
	$spinV1[0].style.cssText = "height: " + hightEl2[0] + "px;";
	$spinV1[1].style.cssText = "height: " + hightEl2[1] + "px;";
	$spinV1[2].style.cssText = "height: " + hightEl2[2] + "px;";
	$spinV1[3].style.cssText = "height: " + hightEl2[3] + "px;";
	$spinV1[4].style.cssText = "height: " + hightEl2[4] + "px;";
	requestAnimationFrame(spin1);
}
spin1();
