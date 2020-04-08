console.log(window.location.pathname);
if (window.location.pathname !== '/hornpub/galery.html') {
    fetchAllPosts();

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

        name.textContent = dataPost.name || document.querySelector("#AddTitle").value;

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

carousel();

if (window.location.pathname !== '/hornpub/galery.html') {

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

    let selector = document.querySelectorAll('#ulnavselector > li > img');
    let imageid;
    selector.forEach((element, i) => {
        element.addEventListener('click', function () {
            imageid = element.id;
            let sp2 = document.querySelector('#create');
            // A CONTINUER.
            return imageid;
        })
    });

    postClass.addEventListener('click', function () {
        event.preventDefault();
        let random_images_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        let num = Math.floor(Math.random() * random_images_array.length);
        let i = imageid;
        // === PERMET DE RECUPERER UNE IMAGE RANDOM DU DOSSIER ===

        let feed = document.querySelector(".divfeed");
        let dataPost = document.querySelector("#AddTitle").value;
        let sp2 = document.querySelector('.button-display');
        console.log(dataPost);
        let createClass = createPost(dataPost, i);
        console.log(createClass);
        feed.insertBefore(createClass, sp2);
    });
}

// (!) Fonctions boutons display (!)

// function buttonChangefirst() {
//     let galerygrid = document.querySelectorAll('.galerygrid-troiscolonnes');
//     console.log(galerygrid);
//     galerygrid.forEach((galerygrid, i) => {
//         galerygrid.classList.replace("galerygrid-troiscolonnes", "galerygrid-unecolonne");
//         console.log(galerygrid);
//     });
//     document.querySelector('.divgalery').style.overflow = "scroll";
// }
//
// function buttonChangesecond() {
//     let galerygrid = document.querySelectorAll('.galerygrid-unecolonne');
//     console.log(galerygrid);
//     galerygrid.forEach((galerygrid, i) => {
//         galerygrid.classList.replace("galerygrid-unecolonne", "galerygrid-troiscolonnes");
//         console.log(galerygrid);
//     });
//     document.querySelector('.divgalery').style.overflow = "hidden";
// }


// si click sur un des buttons-display alors

targets = document.querySelectorAll('.buttons-display > button');
console.log(targets);

targets.forEach((element, i) => {
    element.addEventListener('click', function (event) {
        let images = document.querySelectorAll('.divgalery > div');
        images.forEach((image, i) => {
            image.removeAttribute("class");
            image.classList.add('galerygrid-' + event.target.getAttribute('id'));
        })
    });
});

// récupre l'id de l'élément sur lequel on a cliqué
// remplace la class de toutes les images par .galery-$id

function GFG_Fun() {
    let img = document.createElement('img');
    let galerygriddiv = document.createElement('div');
    let imgcontainer = document.createElement('div');
    let deletebutton = document.createElement('button');
    let inputvalue = document.querySelector('#search').value;
    deletebutton.className = "button";
    deletebutton.textContent = "Supprimer";
    galerygriddiv.className = "galerygrid-troiscolonnes";
    imgcontainer.className = "img-container";
    img.src = inputvalue;
    document.querySelector('.divgalery').appendChild(galerygriddiv);
    galerygriddiv.appendChild(imgcontainer);
    imgcontainer.appendChild(img);
    imgcontainer.appendChild(deletebutton);
}

function imgDelete() {
    target = document.querySelector('')
}