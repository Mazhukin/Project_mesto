// const formElement = document.querySelector('.popup__form');
// const inputElement = formElement.querySelector('.popup__input');

// const showInputError = (formElement, inputElement, objectForm) => { //показывает ошибку
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.add(objectForm.inputErrorClass);
//   errorElement.textContent = inputElement.validationMessage; 
// };

// const hideInputError = (formElement, inputElement, objectForm) => { //скрывает ошибку
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove(objectForm.inputErrorClass);
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement, objectForm) => { //проверка валидности формы
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, objectForm);
//   } else {
//     hideInputError(formElement, inputElement, objectForm);
//   }
// }

// const setEventListeners = (formElement, objectForm) => { //слушатель события
//   const inputList = Array.from(formElement.querySelectorAll(objectForm.inputSelector));
//   const buttonElement = formElement.querySelector(objectForm.submitButtonSelector);
//   toggleButtonState(inputList, buttonElement, objectForm.inactiveButtonClass);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement, objectForm);
//       toggleButtonState(inputList, buttonElement, objectForm.inactiveButtonClass);
//     });
//   });
// };

// const enableValidation = (objectForm) => { //включение проверки
//   const formList = Array.from(document.querySelectorAll(objectForm.formSelector)); 
// formList.forEach((formElement) => {
//   formElement.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//   });
//     setEventListeners(formElement, objectForm);
// }); 
// };

// const hasInvalidInput = (inputList) => {  
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   })
// }; 

// function followButtonInactive(buttonElement) { //кнопка не активна
//   buttonElement.classList.add(objectForm.inactiveButtonClass);
//   buttonElement.setAttribute("disabled", true);
// }

// function followButtonActive(buttonElement) { //кнопка активна
//   buttonElement.classList.remove(objectForm.inactiveButtonClass);
//   buttonElement.removeAttribute("disabled");
// }

// const toggleButtonState = (inputList, buttonElement, objectForm) => { //переключение состояния кнопки
//   if (hasInvalidInput(inputList)) {
//     followButtonInactive(buttonElement, objectForm);
//   } else {
//     followButtonActive(buttonElement, objectForm);
//   }
// }; 

//  enableValidation(objectForm); 