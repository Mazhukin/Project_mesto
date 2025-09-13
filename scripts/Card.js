const popupImageCard = document.querySelector(".popup__image");
const popupImageTitleCard = document.querySelector(".popup__image-title");
const popupImage = document.querySelector('#popup_image'); 

export default class Card {
  constructor(name, link, openPopup) {
    this.name = name;
    this.link = link;
    this.openPopup = openPopup;
  }

  #getTemplate() {
    //получаем темплейт
    const cardElement = document
      .querySelector("#card-template")
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    //Метод добавления в разметку
    this.element = this.#getTemplate(); // Запишем разметку
    this.element.querySelector(".card__image").src = this.link;
    this.element.querySelector(".card__image").alt = this.name;
    this.element.querySelector(".card__title").textContent = this.name;
    this.#setEventListeners(); //добавим слушателя событий

    return this.element; // Вернём элемент наружу
  }

  #handleLikeCard() {
    //лайк карточки
    //находим в элементе класс и добавляем/убираем ему active
    this.element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  #handleDeleteCard() {
    //удаление карточки
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
    //слушатель событий
    this.element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this.#handleLikeCard();
      });

    this.element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this.#handleDeleteCard();
      });

    this.element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this.#handleOpenPopupImage();
      }); //открывает картинку карточки
  }
}

