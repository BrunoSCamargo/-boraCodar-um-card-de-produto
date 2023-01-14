const button = document.querySelector(".but");
const secondbutton = document.querySelector(".butbut");
const sofa2d = document.querySelector(".sofa2d");
const sofagif = document.querySelector(".sofagif");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

button.addEventListener("click", () => {
  button.classList.add("hide");
  secondbutton.classList.remove("hide");

  sofa2d.classList.add("hide");
  sofagif.classList.remove("hide");
});

secondbutton.addEventListener("click", () => {
  secondbutton.classList.add("hide");
  button.classList.remove("hide");

  sofa2d.classList.remove("hide");
  sofagif.classList.add("hide");
});

btn.addEventListener("click", () => {
  text.innerHTML = "Item adicionado á Cesta";
  let phrase = document.getElementById("myPhrase");
  phrase.classList.remove("hide");
  phrase.classList.add("animated");
  setTimeout(() => {
    phrase.classList.add("hide");
    phrase.classList.remove("animated");
  }, 2000);
});
