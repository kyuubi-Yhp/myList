let dataLc = localStorage.getItem('myListdata')

let arrayData = []

const inputUser = document.querySelector('.input__name-js')
const btnSend = document.querySelector('.btn__send-js')
const dataOutputBlock = document.querySelector('.noties__list-js')


if (dataLc !== '' && dataLc !== null) {
  arrayData = JSON.parse(dataLc)
}
renderPost()
// кнопка отправки введенных данных в массив и блок html
btnSend.addEventListener('click', function () {
  const post = getNameForUser()
  if (post.textInside) {
    addPost(post)
    renderPost()
    localStorage.setItem('myListdata', JSON.stringify(arrayData))
    clearFormInput()
  } else {
    alert('значение не задано')
  }
})

// функция получения от пользователя данных из инпута возвращает сразу обьект
function getNameForUser() {
  const inputMeaning = inputUser.value
  return {
    textInside: inputMeaning
  }
}
// добавить данные от пользователя в массив
function addPost(textInside) {
  arrayData.push(
    textInside
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

  arrayDataInsideF.forEach(item => {
    addHtml += `
    <div class="block__form-insideJS">
    <input class="check__point" type="checkbox">
    <p>${item.textInside}</p>
    <img class="cross__for-close cross-js" src="img/close.png" alt="cross">
    </div>`
  })
  dataOutputBlock.innerHTML = addHtml
}

// делегирование событий на родительский эллемент 
dataOutputBlock.addEventListener('click', function (event) {
  if (event.target.classList.contains('cross-js')) {
    const nameToDelete = event.target.parentElement.querySelector('p').textContent;
    deletePost(nameToDelete);
    renderPost()
  }
});


// функция удаления обьекта из массива 
function deletePost(postOnDeleting) {
  const indexInArray = arrayData.findIndex(item => item.textInside === postOnDeleting);
  if (indexInArray !== -1) {
    arrayData.splice(indexInArray, 1); // Удаляем элемент по индексу
    localStorage.setItem('myListdata', JSON.stringify(arrayData))
  } else {
    alert('Имя не найдено в списке.');
  }
}

dataOutputBlock.addEventListener('click', function (event) {
  if (event.target.classList.contains('check__point')) {
    checkedActiveInputRadio(event.target)
  } else {
    console.log('значение не найдено в списке')
  }
})


function checkedActiveInputRadio(check) {
  const parent = check.parentElement
  // parent.style.background = 'green'
  parent.style.opacity = '0.5' 
}










function clearFormInput() {
  inputUser.value = ''
}


