console.log('connected')
//STEP1: Grab HTML elements

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

 const baseURL = "http://localhost:4000";

//STEP2: Write your functions

function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}

function getAllChars() {
  clearCharacters();
  //Let's send a GET request to our server to grab all the characters.
  //Writing an axios.get request to our /characters endpoint on the server.js.
  axios.get(`${baseURL}/characters`) //ASYNC
    .then((response) => {
      console.log(response.data)

      //Let's store our response.data onto a variable to keep track of it.
      const charactersArr = response.data;

      //Now let's write a for loop to go over our array, and create character cards.
      for (let i = 0; i < charactersArr.length; i++) {
        console.log(charactersArr[i]);
        createCharacterCard(charactersArr[i]);
      }
    })
}

function getOnechar(event) {
  clearCharacters();

  axios.get(`${baseURL}/character/${event.target.id}`)
    .then((response) => {
      console.log(response.data);
      const characterObj = response.data;
      createCharacterCard(characterObj);
    })
}

function createNewChar(event) {
  event.preventDefault();

  clearCharacters();
  //Grab the input from the likes input box, copy the values, split at commas, put into new array.
  let newLikes = [...newLikesText.value.split(",")];

  //Let's create this object that will be the body.
  let bodyObj = {
    firstName: newFirstInput.value,
    lastName: newLastInput.value,
    gender: newGenderDropDown.value,
    age: newAgeInput.value,
    likes: newLikes
  }

  axio.post(`${baseURL}/character`, bodyObj)
    .then((response) => {
      const newArr = response.data;
      for(let i = 0; i < newArr.length; i++) {

      }
    })
    newFirstInput.value = ''
    newLastInput.value = ''
    newGenderDropDown.value = 'female'
    newAgeInput.value = ''
    newLikesText.value = ''

}

//STEP3: Assign event Listeners
getAllBtn.addEventListener("click", getAllChars);

for (let i = 0 ; i < charBtns.length; i++) {
  charBtns[i].addEventListener("click", getOnechar);
}

createForm.addEventListener("submit", createNewChar);

getAllChars();