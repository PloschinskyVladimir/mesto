var buttonShow = document.querySelector('.profile__info_edit-button');
var buttonHide = document.querySelector('.popup__close_link');
var popup = document.querySelector('.popup');

buttonShow.addEventListener ('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup_opened');
  })

buttonHide.addEventListener ('click', function(evt) {
    evt.preventDefault();
  popup.classList.remove('popup_opened');
  })
  document.addEventListener ('keydown', function(evt) {
    if(evt.keyCode == 27) {
      popup.classList.remove('popup_opened');
      }
    })

    let formElement = document.querySelector('.form')// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('#name')// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('#job')// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.                                       // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    document.querySelector('.profile__info_name').textContent=nameInput.value;
    document.querySelector('.profile__info_job').textContent=jobInput.value;
    popup.classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
let like = document.querySelectorAll('.card__like');
console.log(like);
for (let i=0; i<like.length; i++) {
  like[i].addEventListener('click', function() {
    this.classList.toggle('card__liked')
  }) 
}