const display=document.getElementById("display-area")as HTMLInputElement;
const button=document.querySelectorAll("button") as NodeListOf<HTMLInputElement>;

let input="";

button.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "c") {
      input = "";
      display.value = "";
    } else if (value === "=") {
      try {
        input = eval(input).toString();
        display.value = input;
      } catch {
        display.value = "Error";
        input = "";
      }
    } else {
      input += value;
      display.value = input;
    }
  });
});