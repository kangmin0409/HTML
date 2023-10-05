let display = document.getElementById("display");
let inputField = document.getElementById("display");

function appendToDisplay(value) {
    inputField.value += value;
}

function clearDisplay() {
    inputField.value = "";
}

function calculateResult() {
    try {
        inputField.value = eval(inputField.value);
    } catch (error) {
        inputField.value = "Error";
    }
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let lightEffect = document.createElement("div");
        lightEffect.className = "light-effect";
        button.appendChild(lightEffect);

        setTimeout(() => {
            button.removeChild(lightEffect); // 빛 효과 제거
        }, 300);

        button.style.opacity = "0.7"; // 클릭 시 버튼을 반투명
    });

    button.addEventListener("mouseleave", () => {
        button.style.opacity = "1"; // 버튼을 다시 불투명하게
    });
});

inputField.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        calculateResult();
    }
});
