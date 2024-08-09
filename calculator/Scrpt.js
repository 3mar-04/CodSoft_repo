const display = document.getElementById("display");

function Clear(input) {
  display.value = "";
}

function Append(input) {
  display.value += input;
}
function Delete(input) {
  display.value = display.value.toString().slice(0 , -1);
}

function Result() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}
