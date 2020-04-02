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

    img.style.maxWidth = "5%";
    img.src = `includes/images/imgs-classes/${i}.png`;

    specs.textContent = "Test";

    classe.appendChild(nameimgdiv);
    classe.appendChild(specsdiv);
    nameimgdiv.appendChild(img);
    nameimgdiv.appendChild(name);
    specsdiv.appendChild(specs);

    return classe;
}

function handleData(data) {
    const feed = document.querySelector('.divfeed');
    console.log(data);
    data.results.forEach((classe, i) => {
        feed.appendChild(createPost(classe, i));
        console.log(classe);
    });
}

fetchAllPosts();