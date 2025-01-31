const arrayData = []

const inputUser = document.querySelector('.input__name-js')
const btnSend = document.querySelector('.btn__send-js')
const dataOutputBlock = document.querySelector('.noties__list-js')

// кнопка отправки введенных данных в массив и блок html
btnSend.addEventListener('click', function() {
const post = getNameForUser()
if (post.namee) {
  addPost(post)
  renderPost()
  clearFormInput()
} else {
  alert('значение не задано')
}
})

// функция получения от пользователя данных из инпута возвращает сразу обьект
function getNameForUser() {
  const inputMeaning = inputUser.value
  return {
    namee: inputMeaning
  }
}
// добавить данные от пользователя в массив
function addPost(namee) {
  arrayData.push(
    namee
  )
}
// функция которая передает массив при ее вызове 
//(он может быть обновлен и каждый раз вызываяэту функцию будут актуальные значения)
function getMassive() {
  return arrayData
}

//функция которая получает массив и создает структуру html из данных в массиве перебором массива
function renderPost() {
  const arrayDataInsideF = getMassive()
  
  let addHtml = ''
  
  arrayDataInsideF.forEach(sou => {
    addHtml += `
    <div class="block__form-insideJS">
    <input class="check__point" type="radio">
    <p>${sou.namee}</p>
    <img class="cross__for-close cross-js" src="img/close.png" alt="cross">
    </div>`
  })
  dataOutputBlock.innerHTML = addHtml
  }

  // делегирование событий на родительский эллемент 
dataOutputBlock.addEventListener('click', function(event) {
  if (event.target.classList.contains('cross-js')) {
      const nameToDelete = event.target.parentElement.querySelector('p').textContent;
      deletePost(nameToDelete);
      renderPost();
  }
});
// функция удаления обьекта из массива 
function deletePost(namee) {
  const index = arrayData.findIndex(item => item.namee === namee);
  if (index !== -1) {
      arrayData.splice(index, 1); // Удаляем элемент по индексу
  } else {
      alert('Имя не найдено в списке.');
  }
}







































function clearFormInput() {
  inputUser.value = ''
}