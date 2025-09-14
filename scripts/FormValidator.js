export default class FormValidator {
  constructor(formElement) {
    this.formElement = formElement;
    //находим все инпуты в форме и делаем из них массив через Array.from
    this.inputs = Array.from(formElement.querySelectorAll(".popup__input"));
    //находим сабмит формы
    this.buttonFormSubmit = formElement.querySelector(".popup__form-button");
  }

  //inputElement, formElement - параметры не переменные
  #showInputError(inputElement, formElement) {
    //показывает ошибку
    //находим нужный span через шаблонную строну (айди инпута + -error)
    const spanErrorMessage = formElement.querySelector(`#${inputElement.id}-error`);
    //добавляем класс с ошибкой в инпут
    inputElement.classList.add("popup__input_error");
    //передаем текст ошибки в span
    spanErrorMessage.textContent = inputElement.validationMessage;
  }

  #hideInputError(inputElement, formElement) {
    //скрывает ошибку
    const spanErrorMessage = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove("popup__input_error");
    spanErrorMessage.textContent = "";
  }

  #checkInputValidity(inputElement, formElement) {
    //проверка на валидацию
    if (!inputElement.validity.valid) {
      this.#showInputError(inputElement, formElement);
    } else {
      this.#hideInputError(inputElement, formElement);
    }
  }

  #toggleButtonState() {
    //переключает состояние кнопки
    //some принимает массив инпутов в форме, если хотябы один инпут не валиден - возвращает true
    const hasInvalidInput = this.inputs.some(
      (inputElement) => !inputElement.validity.valid
    );
    if (hasInvalidInput) {
      this.buttonFormSubmit.classList.add("popup__form-button_invalid");
      this.buttonFormSubmit.setAttribute("disabled", true);
    } else {
      this.buttonFormSubmit.classList.remove("popup__form-button_invalid");
      this.buttonFormSubmit.removeAttribute("disabled");
    }
  }

  #setEventListeners(formElement) {
    //обработчик обытий
    this.#toggleButtonState();

    //обходит массив инпутов и для каждого вызывает методы проверки и состояния кнопки при вводе
    this.inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.#checkInputValidity(inputElement, formElement);
        this.#toggleButtonState();
      });
    });
  }

  enableValidation() {
    //запускает валидацию
    this.#setEventListeners(this.formElement);
  }
}
