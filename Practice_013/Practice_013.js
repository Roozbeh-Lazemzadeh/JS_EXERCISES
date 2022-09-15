const people = {
	firstName: "Roozbeh",
	lastName: "Lazemzadeh",
	age: 34,
	jobTitle: "Js_learner",
	bio: function () {
		return `He is ${this.firstName} ${this.lastName}, he has lived for ${
			this.age * 365
		} days, and his profession is ${this.jobTitle}.`;
	},
	fullName: function () {
		return `${this.firstName} ${this.lastName}`;
	},
};
console.log(people.fullName());
console.log(people.bio());
