const inputs = document.getElementsByTagName("input");

const emptyFields = () => {
  for (const input of inputs) {
    input.addEventListener("focusout", () => {
      if (input.value == "") {
        input.nextElementSibling.classList.remove("hidden");
        input.classList.add("border-error");
      } else {
        input.nextElementSibling.classList.add("hidden");
        input.classList.remove("border-error");
      }
    });
  }
};
emptyFields();
