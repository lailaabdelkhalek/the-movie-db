const KEY = "756b4d2559198022ceed3809b18455f4";

let API_URL = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=756b4d2559198022ceed3809b18455f4&language=en-US`;
let IMG_PATH = "https://image.tmdb.org/t/p/w1280";
let SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;

let main = document.getElementById("main");
let form = document.getElementById("form");
let formTwo = document.getElementById("form2");
let search = document.getElementById("search");
let searchTwo = document.getElementById("search2");

let getClassByRate = (vote) => {
  
};


getMovies('now_playing');

var links = document.getElementsByClassName('nav-link');
for ( i=0 ; i<links.length ; i++)
{
    links[i].addEventListener('click',function(e)
    {
        var currentCategory = e.target.text;
        getMovies(currentCategory)
    })
}


 async function getMovies(category) {
  let res = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=756b4d2559198022ceed3809b18455f4&language=en-US&page=1`);
   let data = await res.json();
   showMovies(data.results);
 };


let showMovies = (movies) => {
  main.innerHTML = "";
  movies.forEach((movie) => {
    let { title, poster_path, vote_average, overview } = movie;
    let movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
    
    <img
      src="${IMG_PATH + poster_path}"
      alt="${title}"
    />
    
    <div class="overview">
    <h3>${title}</h3>
      ${overview}
      <h5 class="${getClassByRate(vote_average)}">rate:${vote_average}</h5>
    
    </div>
    
  `;
    main.appendChild(movieElement);
  });
};



//-----search------------


async function searchMovies(searchTerm) {
  let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchTerm}`);
   let data = await res.json();
   showMovies(data.results);
 };


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    searchMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else history.go(0);
});


formTwo.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchTerm = searchTwo.value;
  if (searchTerm && searchTerm !== "") {
    searchMovies(SEARCH_API + searchTerm);
    searchTwo.value = "";
  } else history.go(0);
});

//--------validation----------

let nameInput = document.getElementById('nameinput');
let phoneInput = document.getElementById('phoneinput');
let passwordInput = document.getElementById('passwordinput');
let emailInput = document.getElementById('emailinput');
let ageInput = document.getElementById('ageinput');
let repasswordInput = document.getElementById('repasswordinput');


function validateName()
{
  var regex=/^[A-Z a-z]{2,15}$/;
  if (regex.test(nameInput.value)==true)
  {
    nameInput.classList.replace('is-invalid', 'is-valid')
    return true;
  }
  else
  {
   nameInput.classList.add('is-invalid')
    return false;
  }
}


function validatePhone()
{
  var regex=/^[+]*[(]{0,1}[0-9]{11}[)]{0,1}[-\s\./0-9]*$/;
  if (regex.test(phoneInput.value)==true)
  {
    phoneInput.classList.replace('is-invalid', 'is-valid')
    return true;
  }
  else
  {
   phoneInput.classList.add('is-invalid')
    return false;
  }
}


function validatePassword()
{
  var regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (regex.test(passwordInput.value)==true)
  {
    passwordInput.classList.replace('is-invalid', 'is-valid')
    return true;
  }
  else
  {
    passwordInput.classList.add('is-invalid')
    return false;
  }
}



function validateRepassword()
{
  var regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (regex.test(repasswordInput.value)==true)
  {
    repasswordInput.classList.replace('is-invalid', 'is-valid')
    return true;
  }
  else
  {
    repasswordInput.classList.add('is-invalid')
    return false;
  }
}




function validateAge()
{
  var regex=/^(1[09]|[2-9]\d)$/;
  if (regex.test(ageInput.value)==true)
  {
    ageInput.classList.replace('is-invalid', 'is-valid')
    return true;
  }
  else
  {
    ageInput.classList.add('is-invalid')
    return false;
  }
}



function validateEmail()
{
  var regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(emailInput.value)==true)
  {
    emailInput.classList.replace('is-invalid', 'is-valid')
    return true;
  }
  else
  {
    emailInput.classList.add('is-invalid')
    return false;
  }
}





//----------sidebar--------

$(document).ready(function() {
  $('#sidebar-btn').on('click', function() {
    $('#sidebar').toggleClass('visible');
  });
});

