let quesButton = document.getElementsByClassName("item-question");
let ansPara = document.getElementsByClassName("item-answer");

for (let i = 0; i < quesButton.length; i++) {
  quesButton[i].addEventListener("click", () => {
    if (
      !quesButton[i].classList.contains("active") &&
      ansPara[i].classList.contains("hide")
    ) {
      quesButton[i].classList.add("active");
      ansPara[i].classList.remove("hide");
    } else {
      quesButton[i].classList.remove("active");
      ansPara[i].classList.add("hide");
    }
  });
}
