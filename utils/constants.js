export {
  initialCards,
  popupImageCard,
  popupImageTitleCard,
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
};

const popupImageCard = document.querySelector(".popup__image");
const popupImageTitleCard = document.querySelector(".popup__image-title");
const popupImage = document.querySelector("#popup_image");
const buttonOpenPopupEdit = document.querySelector(".profile__edit-button");
const formElementEdit = document.querySelector("#popup__form_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupEdit = document.querySelector("#popup_edit");
const popupAdd = document.querySelector("#popup_add");
const buttonOpenPopupAdd = document.querySelector(".profile__add-button");
const buttonClosePopupEdit = document.querySelector("#popup__close-button_edit");
const buttonClosePopupAdd = document.querySelector("#popup__close-button_add");
const popupFormAdd = document.querySelector("#popup__form_add");
const placeInput = document.querySelector(".popup__input_type_place");
const linkInput = document.querySelector(".popup__input_type_link");
const buttonClosePopupImage = document.querySelector("#popup__close-button_image");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];


