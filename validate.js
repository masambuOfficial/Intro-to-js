const female = document.getElementById("female");
const male = document.getElementById("male");
const gender = document.getElementById("genderError");
const nation = document.getElementById("country");
const country1 = document.getElementById("countryError");

// Validating Radio buttons
const sex = () => {
    if (female.checked == false && male.checked == false){
        genderError.innerHTML = "Please select your gender";
        genderError.style = "color:red; font-size:12px; padding-left:5px";
    }else {
        genderError.innerHTML = "";
    }
}

// Validating select
const nation1 = () => {
  if (nation.value == "Default") {
    countryError.innerHTML = "Please select your country";
    countryError.style = "color:red; font-size:12px; padding-left:5px";
  } else {
    countryError.innerHTML = "";
  }
};
var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  nation1();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  sex();
});
