function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function calculateBMI() {
  let height = document.getElementById("height").value / 100;
  let weight = document.getElementById("weight").value;
  let bmi = (weight / (height * height)).toFixed(2);

  let resultText = "";

  if (bmi < 18.5) resultText = "Underweight";
  else if (bmi < 24.9) resultText = "Normal Weight";
  else if (bmi < 29.9) resultText = "Overweight";
  else resultText = "Obese";

  document.getElementById("result").innerHTML =
    "Your BMI: " + bmi + " (" + resultText + ")";
}