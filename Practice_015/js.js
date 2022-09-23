////////////////////////////Part one////////////////////////////////////

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
// 	const para1 = Math.floor(Math.random() * 256);
// 	const para2 = Math.floor(Math.random() * 256);
// 	const para3 = Math.floor(Math.random() * 256);
// 	document.querySelector("body").style.backgroundColor = `rgb(
// 		${para1},${para2},${para3})`;
// });

////////////////////////////Part two////////////////////////////////////

// const input = document.querySelector("input");
// input.addEventListener("change", (e) => {
// 	const li = document.createElement("li");
// 	li.innerHTML = e.target.value;
// 	e.target.value = "";
// 	document.querySelector("ol").append(li);
// });

////////////////////////////Part three////////////////////////////////////

const box = document.querySelector("div");

document.addEventListener("keydown", (e) => {
	const increment = 20;
	if (e.code == "ArrowRight") {
		box.style.left = parseInt(box.style.left) + increment + "px";
		console.log(box.style.left, increment);
	}
	if (e.code == "ArrowLeft") {
		box.style.left = parseInt(box.style.left) - increment + "px";
		console.log(box.style.left, increment);
	}
	if (e.code == "ArrowUp") {
		box.style.top = parseInt(box.style.top) - increment + "px";
		console.log(box.style.top, increment);
	}
	if (e.code == "ArrowDown") {
		box.style.top = parseInt(box.style.top) + increment + "px";
		console.log(box.style.top, increment);
	}
});

////////////////////////////An Alternative For Part three/////////////////
// switch (e.code) {

// case "ArrowRight":
// 	start = start + 20;
// 	box.style.left = start + "px";
// 	break;
// case "ArrowLeft":
// 	start = start - 20;
// 	box.style.left = start + "px";
// 	break;
// case "ArrowUp":
// 	start = start - 20;
// 	box.style.top = start + "px";
// 	break;
// case "ArrowDown":
// 	start = start + 20;
// 	box.style.top = start + "px";
// 	break;
