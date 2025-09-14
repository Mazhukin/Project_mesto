import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  initialCards,
  popupImage,
  buttonOpenPopupEdit,
  formElementEdit,
  nameInput,
  jobInput,
  profileTitle,
  profileSubtitle,
  popupEdit,
  popupAdd,
  buttonOpenPopupAdd,
  buttonClosePopupEdit,
  buttonClosePopupAdd,
  popupFormAdd,
  placeInput,
  linkInput,
  buttonClosePopupImage,
} from "../utils/constants.js";

const formElement = document.querySelector(".popup__form");
const inputElement = formElement.querySelector(".popup__input");

new FormValidator(inputElement).enableValidation(); //проверка полей на валидность

// открывает попап
const openPopup = (popupName) => {
  popupName.classList.add("popup_opened");
  // document.addEventListener("keydown", closePopupEsc);
};

// закрывает попап
const closePopup = (popupName) => {
  popupName.classList.remove("popup_opened");
  // document.removeEventListener("keydown", closePopupEsc);
};

//открывает попап редактирования
function handleOpenPopupEdit() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupEdit);
}

// передает значение попап редактирования
function handleSubmitForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
}

//добавление карточки
function addCard(item) {
  const card = new Card(item, openPopup).generateCard(); //Создадаем карточку
  document.querySelector(".cards").prepend(card); // Добавляем в разметку
}

//получаем массив карточек
initialCards.forEach(addCard);

//добовление новой карточки
function handleSubmitAddInitialForm(evt) {
  evt.preventDefault(); //отменяем стандартное поведение браузера
  const dataNewCard = { name: placeInput.value, link: linkInput.value }; //присваеваем значение новой карточки из инпутов
  addCard(dataNewCard); //передаем аргументом новые значения
  linkInput.value = ""; //сбрасываем поля
  placeInput.value = "";
  closePopup(popupAdd); //закрываем попап
}

//слушатели события
buttonOpenPopupEdit.addEventListener("click", handleOpenPopupEdit); //открывает попап редактирования
buttonClosePopupEdit.addEventListener("click", () => closePopup(popupEdit)); //закрывает попап редактирования
formElementEdit.addEventListener("submit", handleSubmitForm); //сабмит редактирования

buttonOpenPopupAdd.addEventListener("click", () => openPopup(popupAdd)); //открывает попап добавления
buttonClosePopupAdd.addEventListener("click", () => closePopup(popupAdd)); //закрывает попап добавления
popupFormAdd.addEventListener("submit", handleSubmitAddInitialForm); //сабмит добавления

buttonClosePopupImage.addEventListener("click", () => closePopup(popupImage)); // закрывает попап картинки

// //закрывает попап по оверлэй
// function closePopupOverlay(evt) {
// if (evt.target === evt.currentTarget) {
//   closePopup(popupEdit);
//   closePopup(popupAdd);
//   closePopup(popupImage);
//   }
// }
// popupEdit.addEventListener('mousedown', closePopupOverlay);
// popupAdd.addEventListener('mousedown', closePopupOverlay);
// popupImage.addEventListener('mousedown', closePopupOverlay);

// //закрывает попап по esc
// function closePopupEsc(evt) {
//   if (evt.key === "Escape") {
//    const openPopupForEsc = document.querySelector(".popup_opened");
//     closePopup(openPopupForEsc);
//   }
// }
