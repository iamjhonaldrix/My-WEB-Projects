const display = document.getElementById("userInput");
let expression = '';
let hasResult = false;

function RunCal(value) {
  if (hasResult && value !== "CE") {
    return;
  }

  if (!isNaN(value) || value === ".") {
    expression += value;
    display.innerText = expression;
  } else if (value === "+" || value === "-" || value === "x" || value === "/") {
    expression += value;
    display.innerText = expression;
  } else if (value === "=") {
    try {
      let result = eval(expression.replaceAll("x", "*"));
      display.innerText = result;
      expression = result.toString();
      hasResult = true;
    } catch {   
      display.innerText = "Error";
      expression = "";
    }
  } else if (value === "C") {
    expression = expression.slice(0, -1);
    display.innerText = expression;
  } else if (value === "CE") {
    expression = "";
    display.innerText = "";
    hasResult = false;
  }
}

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;
      RunCal(value);
  });
});
