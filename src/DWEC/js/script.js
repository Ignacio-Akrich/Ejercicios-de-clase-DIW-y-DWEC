function suma() {
  let num1 = parseInt(document.getElementById("value1").value);
  let num2 = parseInt(document.getElementById("value2").value);
  let result = num1 + num2;
  document.getElementById("result").innerHTML = result;
}
