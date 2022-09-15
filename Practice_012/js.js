function summary(para, chara) {
	const toShow = para.substring(0, chara);
	const result = `${toShow}...`;
	console.log(result);
}

summary(
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam illo nulla praesentium, dolores quas accusantium impedit voluptatem aliquam mollitia recusandae exercitationem ipsa quam quae, quaerat consequuntur, aliquid qui? Dicta.",
	10
);

// ............................

function secretCard(Num) {
	const stringNum = Num.toString();
	const firstTwelve = stringNum.slice(0, 11);
	console.log(`${firstTwelve}****`);
}

secretCard(1111222233334444);

// ............................

function censor(para, word) {
	const finding = para.includes(word);
	const result = para.replaceAll(word, "*".repeat(word.length));
	console.log(result);
}

censor(
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam illo nulla praesentium, dolores quas accusantium impedit voluptatem aliquam mollitia recusandae exercitationem ipsa quam quae, quaerat consequuntur, aliquid qui? Dicta.",
	"Lorem"
);

// ............................

function level(Num) {
	if (Num <= 2) {
		result = "Junior";
	} else if (Num >= 3 && Num <= 5) {
		result = "Midlevel";
	} else if ((Num) => 5) {
		result = "Senior";
	}

	console.log(result);
}

level(2);
// ............................
