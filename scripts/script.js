import {initialCards} from '../utils/constants.js'; 
import Card from './Card.js'

const buttonOpenPopupEdit = document.querySelector('.profile__edit-button'); 
const formElementEdit = document.querySelector('#popup__form_edit'); 
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job'); 
const profileTitle = document.querySelector('.profile__title'); 
const profileSubtitle = document.querySelector('.profile__subtitle'); 
// const popupName = document.querySelector('.popup'); 
const popupEdit = document.querySelector('#popup_edit'); 
const popupAdd = document.querySelector('#popup_add'); 
const popupImage = document.querySelector('#popup_image'); 
const buttonOpenPopupAdd = document.querySelector('.profile__add-button'); 
const buttonClosePopupEdit = document.querySelector('#popup__close-button_edit'); 
const buttonClosePopupAdd = document.querySelector('#popup__close-button_add'); 
// const initialContainer = document.querySelector('.elements'); 
const popupFormAdd = document.querySelector('#popup__form_add'); 


const placeInput = document.querySelector('.popup__input_type_place');  
const linkInput = document.querySelector('.popup__input_type_link'); 


const buttonClosePopupImage = document.querySelector('#popup__close-button_image'); 
// const popupImageCard = document.querySelector('.popup__image');  
// const popupImageTitleCard = document.querySelector('.popup__image-title'); 
// const buttonElement = document.querySelector('.popup__form-button');
// const buttonFormAdd = document.querySelector('#popup__form-button_add');




// открывает попап 
const openPopup = (popupName) => { 
  popupName.classList.add('popup_opened'); 
  // document.addEventListener("keydown", closePopupEsc);
}; 

// закрывает попап 
const closePopup = (popupName) => { 
  popupName.classList.remove('popup_opened'); 
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



buttonOpenPopupEdit.addEventListener('click', handleOpenPopupEdit);  //открывает попап редактирования
buttonClosePopupEdit.addEventListener('click',()=>  closePopup(popupEdit)) //закрывает попап редактирования
formElementEdit.addEventListener('submit', handleSubmitForm); //сабмит редактирования

buttonOpenPopupAdd.addEventListener('click', ()=> openPopup(popupAdd)); //открывает попап добавления
buttonClosePopupAdd.addEventListener('click', ()=> closePopup(popupAdd)); //закрывает попап добавления


buttonClosePopupImage.addEventListener('click', ()=> closePopup(popupImage)); // закрывает попап картинки 


initialCards.forEach((item) => {//отображение карточек из массива
  const card = new Card(item.name, item.link, openPopup); //Создадим экземпляр карточки
  const cardElement = card.generateCard(); // Создаём карточку и возвращаем наружу 
  document.querySelector('.cards').prepend(cardElement); // Добавляем в DOM
});


const handleSubmitAddInitialForm = (evt) => { //добовление новой карточки
  evt.preventDefault(); 
  const card = new Card(placeInput.value, linkInput.value, openPopup);  
  const cardElement = card.generateCard(); 
  document.querySelector('.cards').prepend(cardElement); // Добавляем в DOM
  linkInput.value = '';  
  placeInput.value = '';
  closePopup(popupAdd); 

  console.log(card)
} 

popupFormAdd.addEventListener("submit", handleSubmitAddInitialForm); //сабмит добавления













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







// const objectForm = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__form-button',
//   inactiveButtonClass: 'popup__form-button_invalid',
//   inputErrorClass: 'popup__input_error',
// }; 