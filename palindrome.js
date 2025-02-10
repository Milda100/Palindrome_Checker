const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


const isPalindrome = (textSplitLefToRig, textSplitRigToLef) => {
    if (textSplitLefToRig.join("") === textSplitRigToLef.join("")) {
        result.innerHTML = `<p>${textInput.value} is a palindrome</p>`;
    } else {
        result.innerHTML =`<p>${textInput.value} is not a palindrome</p>`;
    }
    result.hidden = false; // Explicitly set hidden to false
};


function cleanInputString(textInput) {
    return textInput.replace(/[^a-zA-Z0-9]/g, '');
  };


const userInput = () => {
    const cleanInput = cleanInputString(textInput.value.toLowerCase());
    const textSplitLefToRig = cleanInput.split("");
    const textSplitRigToLef = [...textSplitLefToRig].reverse();

   // console.log(textSplitLefToRig);
   // console.log(textSplitRigToLef);

    if (!textInput.value) {
        alert("Please input a value");
        return;
    }
    isPalindrome(textSplitLefToRig, textSplitRigToLef);

};

checkBtn.addEventListener("click", userInput);

textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        userInput();
    }
  });
