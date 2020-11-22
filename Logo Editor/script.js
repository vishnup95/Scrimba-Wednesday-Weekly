/*
DESCRIPTION:
In this challenge you are asked to change how the logo looks when you click 
the three buttons. This is an excellent challenge for styling elements in 
JavaScript, not CSS.

If the user clicks the first button, I want the text on the 
logo to become black. If the user clicks the second button, 
I want the logo background to become red. If the user clicks the third button,
I would like you to add a shadow to the logo.

event listeners, getElementById, operators

*/

// Write your code here 👇

// TODO: Download as image.
// Add custom options (color, Bg, shadow..)

const buttonOne = document.querySelector("#button-one");
buttonOne.innerHTML = "Make Text Black";
buttonOne.style.color = "white";

const buttonTwo = document.querySelector("#button-two");
buttonTwo.innerHTML = "Make Button Red";

const buttonThree = document.querySelector("#button-three");
buttonThree.innerHTML = "Add a shadow";

const buttonText = document.querySelector("#text");
const buttonLogo = document.querySelector(".logo");

const logoInput = document.querySelector("#logo-name-input");

const saveCanvasBtn = document.querySelector("#download-as-html");

const returnStyleValue = (ele, style) => {
  return getComputedStyle(ele).getPropertyValue(style);
};

function setInnerText(textOne, textTwo, that) {
  return that.innerHTML === textOne ? textTwo : textOne;
}

buttonOne.addEventListener("click", function (e) {
  const txtColor = returnStyleValue(buttonText, "color");
  buttonText.style.color =
    txtColor === "rgb(241, 242, 246)" ? "black" : "rgb(241, 242, 246)";
  this.innerHTML = setInnerText("Make Text Black", "Make Text White", this);
});

buttonTwo.addEventListener("click", function (e) {
  const buttonBgColor = returnStyleValue(buttonLogo, "background-color");
  buttonLogo.style.backgroundColor =
    buttonBgColor === "rgb(255, 134, 0)" ? "red" : "rgb(255, 134, 0)";
  this.innerHTML = setInnerText("Make Button Red", "Make Button Orange", this);
});

buttonThree.addEventListener("click", function (e) {
  const buttonShadow = returnStyleValue(buttonLogo, "box-shadow");
  buttonLogo.style.boxShadow =
    buttonShadow === "none" ? "1px 1px 6px 6px" : "none";
  this.innerHTML = setInnerText("Add a shadow", "Remove the shadow", this);
});

logoInput.addEventListener("input", function (e) {
  buttonText.innerHTML = e.target.value;
});

function downloadImg(uri, name) {
  let link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

saveCanvasBtn.addEventListener("click", () => {
  html2canvas(buttonLogo, {
    backgroundColor: null,
  }).then((ct) => {
    const ig = ct.toDataURL();
    downloadImg(ig, "logo-generated.png");
  });
});
