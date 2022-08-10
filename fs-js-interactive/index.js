console.log("hello world")

const message = document.querySelector("#message");


function addMovie(event) {
    event.preventDefault();

    const inputField = document.querySelector("input")
    const movie = document.createElement("li");

    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value

    movie.appendChild(movieTitle);

    const ulInHtml = document.querySelector("ul");
    ulInHtml.appendChild(movie) 

    inputField.value = "";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", deleteMovie);

    movie.appendChild(deleteBtn);

    movieTitle.addEventListener("click", crossOffMovie)


}

document.querySelector("form").addEventListener("submit", addMovie);

function deleteMovie (event) {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"

    revealMessage();
}

function crossOffMovie (event) {
    event.target.classList.toggle("checked"); 
    if (event.target.classList.contains('checked') === true) {
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back!"
    }

    revealMessage()

}

function revealMessage () {
    setTimeout(callBack=()=>{
        message.classList.add("hide")
    }, 1000 );

}
