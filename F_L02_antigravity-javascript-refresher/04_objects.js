const aboutMe = {
  name: "Lily",
  age: 19,
  course: "BSIT",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, taking ${this.course}.`);
  }
};

aboutMe.hobby = "watching kdrama";
aboutMe.introduce();
