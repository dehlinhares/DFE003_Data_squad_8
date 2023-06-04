import disney from "../src/data/disney/characters.json" assert {type: "json"};

var dataListDisney = disney.data;
let htmlShow = document.getElementById("card-container");
let allHtmlShowInfos = "";

function displayNames(data) {
  allHtmlShowInfos = data.map(({ films, shortFilms, videoGames, parkAttractions, allies, enemies, _id, name, imageUrl, url }) => {
    let linkHtml = "";
    if (url) {
      linkHtml = `<a href="${url}">LINK</a>`;
    }

    return `
    <div class="card" id="card">
      <div class="gridContainerUp" id="gridContainerUp">
        <div class="title">${name}</div> 
        <div class="title">${films}</div>
        <div class="title">${shortFilms}</div>
        <div class="title">${videoGames}</div>
        <div class="title">${parkAttractions}</div>
        <div class="title">${allies}</div>
        <div class="title">${enemies}</div>
        <div class="title">${_id}</div>
        ${linkHtml}
      </div>
      <hr class="upline">
      <div class="backgroundImg" id="backgroundImg"></div>
      <img class="picture" src=${imageUrl}></img>
    </div>`;
  }).join("");

  htmlShow.innerHTML = allHtmlShowInfos;
}

displayNames(dataListDisney);

