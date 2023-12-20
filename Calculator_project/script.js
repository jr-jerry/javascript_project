const input = document.querySelector("input");

const container = document.querySelector(".calc");
console.log(container);
container.addEventListener("click", (event) => {
    calculate(event.target.textContent);
    console.log(input.value);
})
function calculate(passValue) {
    if (passValue === "%") {
        input.value = input.value.toString() + passValue;

    }
    else if (passValue === "DEL") {
        input.value = input.value.toString().slice(0, -1);
    }
    else if (passValue === "c") {
        input.value = "";

    }
    else if (passValue === "=") {
        if (input.value.toString().includes("%"))
         {
            const func = new Function('return ' + input.value.toString().replace('%', "/100"));
            input.value = func();
        }
        else {
            const func = new Function('return ' + input.value);
            input.value = func();

        }
    }
    else {
        input.value = input.value.toString() + passValue;
    }
}
