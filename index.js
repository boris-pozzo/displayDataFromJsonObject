var person = {
  name: "Julien",
  country: "France",
  age: 18,
  SimplonStudent: true,
  skills: ["Javascript", "HTML", "CSS"]
};

function print(text) {
  var div = document.getElementById("display");
  div.innerHTML = text;
}

var message = "<p>Hello. My name is " + person.name + "</p>";
message += "<p>I live in " + person.country + "</p>";
person.age += 1;
message += "<p> My age is now " + person.age + "</p>";
message +=
  "<p>I have " +
  person.skills.length +
  " skills : " +
  person.skills.join(", ") +
  "</p>";

print(message);
