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

    name.textContent = dataPost.name;

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
    console.log(data);
    data.results.forEach((classe, i) => {
        feed.insertBefore(createPost(classe, i), sp2);
        console.log(classe);
    });
}

function createnewClass() {
    const feed = document.querySelector('.divfeed');
    let sp2 = document.querySelector('.button-display');
    document.querySelector('#myform').addEventListener("submit", function (event) {
        event.preventDefault();
        const newclasse = document.createElement('div');
        const nameimgdivnew = document.createElement('div');
        const newname = document.createElement('h3');
        const newimg = document.createElement('img');
        newclasse.style.borderRadius = "5px";
        newclasse.style.margin = "5px 0";
        newclasse.style.padding = "5px";
        newclasse.style.maxWidth = "95%";
        newclasse.style.marginLeft = "1%";
        newclasse.style.marginBottom = "3%";
        newclasse.style.marginTop = "3%";
        newclasse.style.backgroundColor = "rgba(141, 166, 255, 0.19)";
        nameimgdivnew.style.display = "flex";
        nameimgdivnew.style.justifyContent = "space-center";
        newname.textContent = $(".classname").val();
        newimg.src = $(".imgurl").val();
        newimg.style.maxWidth = "7%";
        newimg.style.minWidth = "7%";
        newimg.style.width = "7%";
        newimg.style.resize = "none";

        newclasse.appendChild(nameimgdivnew);
        nameimgdivnew.appendChild(newimg);
        nameimgdivnew.appendChild(newname);
        feed.insertBefore(createnewClass(newclasse), sp2);
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
createnewClass();

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