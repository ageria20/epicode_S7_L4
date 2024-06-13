const loadImages = document.getElementById("loadImages");
const loadSecondaryImages = document.getElementById("loadSecondaryImages");
const row = document.getElementById("row");

const handleLoadImages = () => {
  fetch("https://api.pexels.com/v1/search?query=mountain", {
    method: "GET",
    headers: {
      Authorization: "IE04yNlxQ4MobSDaCQ2xiIt2efMn4W8kSGNaDWBhrmjwAG7xxTrZ2pfb",
    },
  })
    .then(response => response.json())
    .then(currImg => {
      console.log(currImg.photos);
      currImg.photos.forEach(image => {
        // // creo la colonna
        const col = document.createElement("div");
        // //attribuisco alla col
        col.className = "col-md-4";
        // // appendo la col alla row
        row.appendChild(col);
        // // creo la card
        const card = document.createElement("div");
        // // attribuisco le classi alla card
        card.classList.add("card");
        card.classList.add("mb-4");
        card.classList.add("shadow-sm");
        // // appendo la card alla colonna
        col.appendChild(card);

        // creo le immagini
        const img = document.createElement("img");
        img.className = "bd-placeholder-img card-img-top";
        img.setAttribute("src", image.src.medium);
        img.setAttribute("alt", image.alt);
        // Appendo l-immagine alla card
        card.appendChild(img);
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);
        // creo il titolo del body
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = `Photographer: ${image.photographer}`;
        cardBody.appendChild(cardTitle);
        const description = document.createElement("p");
        description.className = "card-text";
        description.innerText = `This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.`;
        // btn group

        const btnGroupCont = document.createElement("div");
        btnGroupCont.className = "d-flex justify-content-between align-items-center";
        card.appendChild(btnGroupCont);

        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";
        btnGroupCont.appendChild(btnGroup);
        const btnView = document.createElement("button");
        btnView.type = "button";
        btnView.className = "btn btn-sm btn-outline-secondary";
        btnView.innerText = `VIEW`;
        btnGroup.appendChild(btnView);
        const btnEdit = document.createElement("button");
        btnEdit.type = "button";
        btnEdit.className = "btn btn-sm btn-outline-secondary";
        btnEdit.innerText = `EDIT`;
        btnGroup.appendChild(btnEdit);

        //creo l'elemento small
        const small = document.createElement("small");
        small.className = "text-muted";
        small.innerText = "9 mins";
        btnGroupCont.appendChild(small);
      });
    })
    .catch(err => console.log(err));
};

const handleLoadSecondaryImages = () => {
  fetch("https://api.pexels.com/v1/search?query=beach", {
    method: "GET",
    headers: {
      Authorization: "IE04yNlxQ4MobSDaCQ2xiIt2efMn4W8kSGNaDWBhrmjwAG7xxTrZ2pfb",
    },
  })
    .then(response => response.json())
    .then(currImg => {
      console.log(currImg.photos);
      currImg.photos.forEach(image => {
        // // creo la colonna
        const col = document.createElement("div");
        // //attribuisco alla col
        col.className = "col-md-4";
        // // appendo la col alla row
        row.appendChild(col);
        // // creo la card
        const card = document.createElement("div");
        // // attribuisco le classi alla card
        card.classList.add("card");
        card.classList.add("mb-4");
        card.classList.add("shadow-sm");
        // // appendo la card alla colonna
        col.appendChild(card);

        // creo le immagini
        const img = document.createElement("img");
        img.className = "bd-placeholder-img card-img-top";
        img.setAttribute("src", image.src.medium);
        img.setAttribute("alt", image.alt);
        // Appendo l-immagine alla card
        card.appendChild(img);
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);
        // creo il titolo del body
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = `Photographer: ${image.photographer}`;
        cardBody.appendChild(cardTitle);
        const description = document.createElement("p");
        description.className = "card-text";
        description.innerText = `This is a wider card with supporting text below as a natural lead-in to additional content. This
                      content is a little bit longer.`;
        // btn group

        const btnGroupCont = document.createElement("div");
        btnGroupCont.className = "d-flex justify-content-between align-items-center";
        card.appendChild(btnGroupCont);

        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";
        btnGroupCont.appendChild(btnGroup);
        const btnView = document.createElement("button");
        btnView.type = "button";
        btnView.className = "btn btn-sm btn-outline-secondary";
        btnView.innerText = `VIEW`;
        btnGroup.appendChild(btnView);
        const btnEdit = document.createElement("button");
        btnEdit.type = "button";
        btnEdit.className = "btn btn-sm btn-outline-secondary";
        btnEdit.innerText = `EDIT`;
        btnGroup.appendChild(btnEdit);

        //creo l'elemento small
        const small = document.createElement("small");
        small.className = "text-muted";
        small.innerText = "9 mins";
        btnGroupCont.appendChild(small);
      });
    })
    .catch(err => console.log(err));
};

window.addEventListener("DOMContentLoaded", function () {
  loadImages.onclick = handleLoadImages;
  loadSecondaryImages.onclick = handleLoadSecondaryImages;
});
