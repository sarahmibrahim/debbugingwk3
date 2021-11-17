function add (num1, num2) {
  return num1 + num2
}

function display() {
  num1 = document.getElementById("num").value
  num2 = document.getElementById("num2").value
  let answer = add(num1, num2)
  document.getElementById("answer").value = answer
}