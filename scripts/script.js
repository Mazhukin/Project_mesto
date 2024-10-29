const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const buttonClosePopup = document.querySelector('.popup__button-close');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonCardDelete = document.querySelector('.card__button-delete');

const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('#popup_edit');
const popupAdd = document.querySelector('#popup_add');

const popupForm = document.querySelector('.popup__form');
const popupFormEdit = document.querySelector('#popup__form-edit');
const popupFormAdd = document.querySelector('#popup__form-add');

const inputFormName = document.querySelector('#popup__form-name');
const inputFormProfession = document.querySelector('#popup__form-profession');
const inputFormPlace = document.querySelector('#popup__form-place');
const inputFormLink = document.querySelector('#popup__form-link');

const cardTemplate = document.querySelector('#card').content;
const cards = document.querySelector('.cards');


initialCards.forEach(function (card) { //отображение карточек по массиву
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__image').src = card.link;

  cardElement.addEventListener('click', function (evt) { //лайк имеющихся карточек
    if (evt.target.classList.contains('card__like')) { 
      evt.target.classList.toggle('card__like_active'); 
    }
  });

  cardElement.addEventListener('click', function (evt) { //удаление карточки
    if (evt.target.classList.contains('card__button-delete'))
    evt.target.closest('.card').remove(); 
  }
);

  cards.append(cardElement);
})


const createNewCard =(data) =>{ // создание новой карточки
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = data.name;
  cardElement.querySelector('.card__image').src = data.link;

  cardElement.addEventListener('click', function (evt) { //лайки новой карточки
    if (evt.target.classList.contains('card__like')) { 
      evt.target.classList.toggle('card__like_active'); 
    }
  });
  
  cardElement.addEventListener('click', function (evt) { //удаление новой карточки
      if (evt.target.classList.contains('card__button-delete'))
      evt.target.closest('.card').remove(); 
    }
  );

  return cardElement;
}


function closePopup(namePopup) { //закрыте попапов
  namePopup.classList.remove('popup_opened');
}


function openPopup(namePopup) { //открытие попаов
  namePopup.classList.add('popup_opened');
}


function handleOpenPopupEdit() { //обработчик открытия попапа редактирования
  openPopup(popupEdit);
  inputFormName.value = profileTitle.textContent;
  inputFormProfession.value = profileSubtitle.textContent;
}
buttonEdit.addEventListener('click', handleOpenPopupEdit); 


function handleFormSubmitEdit(evt) { //обработчик отправки формы редактирования
  evt.preventDefault();
  profileTitle.textContent = inputFormName.value;
  profileSubtitle.textContent = inputFormProfession.value;
  closePopup(popupEdit);
}
popupFormEdit.addEventListener('submit', handleFormSubmitEdit);


buttonAdd.addEventListener('click', ()=> openPopup(popupAdd)); //открывает попап добавление


function handleFormSubmitAdd(evt) { //обработчик отправки формы добавления
  evt.preventDefault();
  cards.prepend(createNewCard({ link: inputFormLink.value, name: inputFormPlace.value})); 
  closePopup(popupAdd);
}
popupFormAdd.addEventListener('submit', handleFormSubmitAdd);

















