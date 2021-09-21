const numberGenerator = document.querySelector(".random-number");
const button = document.querySelector(".button1");

// console.log(numberGenerator);
// console.log(button);

let generateRandomNumber = () => {
    const minValue = document.querySelector("#min").value;
    const maxValue = document.querySelector("#max").value;
    // console.log(minValue)
    // console.log(maxValue)
    min = Math.ceil(minValue);
    max = Math.floor(maxValue);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber)
    numberGenerator.innerHTML = randomNumber;
};

button.addEventListener("click", generateRandomNumber);

