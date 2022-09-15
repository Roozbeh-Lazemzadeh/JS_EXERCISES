let confirmation = confirm("آیا قصد ثبت نام در سایت را دارید؟");
let userName;
let userLastName;
let age;
let password;

if (confirmation == true) {
	userName = prompt("نام");
	userLastName = prompt("نام خانوادگی");
	age = +prompt("سن");
	password = prompt("رمزعبور");
}

if (userName === "") {
	alert("نام خود را واردکنید.");
}
if (userLastName === "") {
	alert("نام خانوادگی خود را واردکنید.");
}
if (age !== NaN) {
	alert("سن خود را وارد کنید.");
} else if (age < 18) {
	alert("شما به سن قانونی نرسیده اید.");
}
if (password === "") {
	alert("رمز عبور خود را وارد کنید.");
} else if (password.length < 6) {
	alert("رمز عبور باید بیشتر از 6 کارکتر باشد.");
} else {
	alert(`${userName}عزیز ثبت نام شما انجام شده است`);
}
