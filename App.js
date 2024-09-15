let btn = document.querySelectorAll("button");
let divEl = document.getElementById("ans");
let keyEl = document.getElementById("keyboard");
let operator = ["+", "-", "*", "/", "%"];
let bigOp = ["*", "/", "%"];
let op = "";
let idd;
for (let item of btn) {
  item.addEventListener("click", () => {
    if (item.innerText === "AC") {
      divEl.innerText = "";
      op = "";
    } else if (item.innerText === "=") {
      try {
        divEl.innerText = "ans: " + eval(divEl.innerText);
        op = eval(divEl.innerText);
      } catch (e) {
        divEl.innerHTML = "Wrong Operation!";
      }
      idd = setTimeout(() => {
        divEl.innerText = "";
      }, 10000);
    } else if (item.innerText === "+/-") {
      clearTimeout(idd);
      if (op === "") {
        divEl.innerHTML = "Wrong Operation!";
      } else {
        let str = eval(op * -1).toString();
        divEl.innerText =
          str.length > divEl.innerText.length
            ? str
            : divEl.innerText.substring(0, divEl.innerText.length - op.length) +
              str;
        op = str;
      }
    } else {
      clearTimeout(idd);
      if (bigOp.includes(item.innerText) && divEl.innerText === "") {
        divEl.innerText = "";
      } else {
        if (divEl.innerText === "Wrong Operation!") {
          divEl.innerText = "";
        }
        if (divEl.innerText.substring(0, 5) === "ans: ") {
          divEl.innerText = op;
        }
        if (operator.includes(item.innerText)) {
          op = "";
        } else {
          op += item.innerText;
        }
        if (
          operator.includes(
            divEl.innerText.charAt(divEl.innerText.length - 1)
          ) &&
          operator.includes(item.innerText)
        ) {
          divEl.innerHTML =
            divEl.innerText.substring(0, divEl.innerText.length - 1) +
            item.innerText;
        } else {
          divEl.innerText += item.innerText;
        }
      }
    }
  });
}
