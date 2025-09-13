import {popupImageCard, popupImageTitleCard, popupImage} from '../utils/constants.js'

export default class Card {
  constructor(data, openPopup) {
    this.name = data.name;
    this.link = data.link;
    this.openPopup = openPopup;
  }

  #getTemplate() {
    const cardElement = document
      .querySelector("#card-template")
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this.element = this.#getTemplate(); // Запишем разметку
    this.element.querySelector(".card__image").src = this.link;
    this.element.querySelector(".card__image").alt = this.name;
    this.element.querySelector(".card__title").textContent = this.name;
    this.#setEventListeners(); //добавим слушателя событий

    return this.element; // Вернём элемент наружу
  }

  #handleLikeCard() {
    //находим в элементе класс и добавляем/убираем ему active
    this.element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  #handleDeleteCard() {
    //находим ближайший родительский элемент с этим классом и удаляем его
    this.element.closest(".card").remove();
  }

  #handleOpenPopupImage() {
    //открывание карточки
    this.openPopup(popupImage);
    popupImageCard.src = this.link;
    popupImageCard.alt = this.name;
    popupImageTitleCard.textContent = this.name;
  }

  #setEventListeners() {
    //слушатели события
    this.element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this.#handleLikeCard();
      }); //лайк карточки

    this.element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this.#handleDeleteCard();
      }); //удаление карточки

    this.element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this.#handleOpenPopupImage();
      }); //открывает картинку карточки
  }
}

