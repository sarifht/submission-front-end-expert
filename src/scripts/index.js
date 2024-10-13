// Sarif Hidayatullah
import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

// Mengambil Elemen Menu
const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

// Menambahkan event clik
menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});

// Mengambil data json dari file DATA.json
import("../public/data/DATA.json").then(({ default: jsonData }) => {
  let datas = jsonData["restaurants"];
  let dataList = "";
  datas.forEach(function (data) {
    dataList += `
        <div class="list_item">
            <img class="list_item_thumb" src="${data["pictureId"]}" alt="${data["name"]}" title="${data["name"]}">
            <div tabindex="0" aria-label="rating" class="rating"><i class="fas fa-star"></i> ${data["rating"]}</div>
            <div class="list_item_content">
                <p class="list_item_city">
                    <a href="#" class="list_item_city_value" aria-label="Alamat"><i class="fas fa-map-marker-alt"></i>  ${data["city"]}</a>
                </p>
                <h1 class="list_item_title"><a aria-label="${data["name"]}" href="#">${data["name"]}</a></h1>
                <div tabindex="0" class="list_item_desc">${data["description"].slice(0, 180)}...</div>
            </div>
        </div>
        `;
  });
  document.querySelector("#data").innerHTML = dataList;
});
