function fetchAllPosts() {
    fetch("https://www.dnd5eapi.co/api/classes")
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            handleData(response);
        })
}

function createPost(dataPost, i) {
    const classe = document.createElement('div');
    const nameimgdiv = document.createElement('div');
    const name = document.createElement('h3');
    const img = document.createElement('img');
    const specsdiv = document.createElement('div');
    const specs = document.createElement('p');

    classe.className = "divclasse";
    classe.id = `classeperso-${i}`;
    classe.style.borderRadius = "5px";
    classe.style.margin = "5px 0";
    classe.style.padding = "5px";
    classe.style.maxWidth = "95%";
    classe.style.marginLeft = "1%";
    classe.style.marginBottom = "3%";
    classe.style.marginTop = "3%";
    classe.style.backgroundColor = "rgba(141, 166, 255, 0.19)";
    nameimgdiv.style.display = "flex";
    nameimgdiv.style.justifyContent = "space-center";
    specsdiv.style.margin = "0 auto";
    specsdiv.style.width = "100%";

    name.textContent = dataPost.name || document.querySelector(".classname").value;

    img.style.maxWidth = "7%";
    img.style.minWidth = "7%";
    img.style.width = "7%";
    img.style.resize = "none";
    img.src = `includes/images/imgs-classes/${i}.png`;

    classe.appendChild(nameimgdiv);
    classe.appendChild(specsdiv);
    nameimgdiv.appendChild(img);
    nameimgdiv.appendChild(name);
    specsdiv.appendChild(specs);

    return classe;
}

function handleData(data) {
    const feed = document.querySelector('.divfeed');
    let sp2 = document.querySelector('.button-display');
    data.results.forEach((classe, i) => {
        feed.insertBefore(createPost(classe, i), sp2);
        console.log(classe);
    });
}

function carousel() {
    $(document).ready(function () {

        $(".Modern-Slider").slick({
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 900,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            dots: true,
            pauseOnDotsHover: true,
            cssEase: 'linear',
            fade: true,
            draggable: false,
            prevArrow: '<button class="PrevArrow"></button>',
            nextArrow: '<button class="NextArrow"></button>',
        });

    })
}

fetchAllPosts();
carousel();

let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let button = document.querySelector(".overlay");

function buttonFunction(event) {
    event.preventDefault();
    modal.classList.add("is-active");
}

function overlayFunction(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    modal.classList.remove("is-active");
}

let postClass = document.querySelector('.button');

postClass.addEventListener('click', function () {
    event.preventDefault();
    let random_images_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let num = Math.floor(Math.random() * random_images_array.length);
    let i = random_images_array[num];
    let feed = document.querySelector(".divfeed");
    let dataPost = document.querySelector(".classname").value;
    let sp2 = document.querySelector('.button-display');
    console.log(dataPost);

    let createClass = createPost(dataPost, i);
    console.log(createClass);
    feed.insertBefore(createClass, sp2);
});