let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

const updateDisplay = () => {
  input.value = string;
};

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleInput(e.target.innerHTML);
  });
});

function handleInput(value) {
  if (value == "=" || value == "Enter") {
    try {
      string = eval(string).toString();
    } catch {
      string = "Error";
    }
  } else if (value == "C" || value == "Escape") {
    string = "";
  } else if (value == "DEL" || value == "Backspace") {
    string = string.substring(0, string.length - 1);
  } else if (value == "CE") {
    let lastOperatorIndex = Math.max(
      string.lastIndexOf("+"),
      string.lastIndexOf("-"),
      string.lastIndexOf("*"),
      string.lastIndexOf("/"),
    );
    string =
      lastOperatorIndex !== -1
        ? string.substring(0, lastOperatorIndex + 1)
        : "";
  } else if (value == "√") {
    string = Math.sqrt(parseFloat(string)).toString();
  } else if (value == "x²") {
    string = Math.pow(parseFloat(string), 2).toString();
  } else if (value == "1/x") {
    if (string === "" || string === "0") {
      string = "Error";
    } else {
      string = (1 / parseFloat(string)).toString();
    }
  } else {
    string += value;
  }
  updateDisplay();
}

window.addEventListener("keydown", (e) => {
  const validKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
  ];

  if (validKeys.includes(e.key)) {
    handleInput(e.key);
  } else if (e.key === "Enter") {
    e.preventDefault();
    handleInput("Enter");
  } else if (e.key === "Backspace") {
    handleInput("Backspace");
  } else if (e.key === "Escape") {
    handleInput("Escape");
  }
});
