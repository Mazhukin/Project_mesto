export default class FormValidator {
  constructor() {}

  #showInputError(input) {
    input.classList.add("popup__input_error");
  }

  #hideInputError(input) {
    input.classList.remove("popup__input_error");
  }

  #isValid(input) {
    if (!input.validity.valid) {
      //проверка инпута на валидность
      this.#showInputError(input);
    } else {
      this.#hideInputError(input);
    }
  }

  enableValidation() {
    //находим все инпуты и делаем из них массив
    const inputList = Array.from(document.querySelectorAll(".popup__input"));
    inputList.forEach((input) => {
      //каждому инпуту добавить проверку
      input.addEventListener("input", () => {
        this.#isValid(input);
      });
    });
  }
}
