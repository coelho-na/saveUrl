// Declaring variables of elements I need

let btn = document.querySelector(".form__button");
let url = document.getElementById("textUrl");
let sectionPost = document.querySelector(".urls__post");
let inputImage = document.querySelector("input#image");
let inputVideo = document.querySelector("input#video");
let inputLink = document.querySelector("input#link");
let div = document.querySelector("#linkDiv");
div.style.display = "none";

// Event When Click on Button
btn.addEventListener("click", createUrlList);

// function to fire when btn is clicked

function createUrlList() {
  let random = Math.floor(Math.random() * (50 - 20) + 25);
  let newList = document.createElement("div");
  newList.classList.add("urls__content");

  if (inputImage.checked && url.value != "") {
    sectionPost.appendChild(newList);
    newList.setAttribute("id", random);
    newList.innerHTML += `
        <img class="urls__content--img" src="${url.value}" />
        <span class="button__close"><i class="fas fa-times urls__icon"></i></span>
      `;
  }
  if (inputVideo.checked && url.value != "") {
    sectionPost.appendChild(newList);
    newList.setAttribute("id", random);
    newList.innerHTML += `
    <iframe class="urls__content--video" width="100%" height="480" src="${url.value}">
    </iframe>
    <a class="button__close"><i class="fas fa-times urls__icon"></i></a>
  `;
  }
  if (inputLink.checked && url.value != "") {
    div.style.display = "block";
    let link = document.querySelector("#linkDiv a:nth-child(1)");
    link.setAttribute("href", url.value);
    link.textContent = url.value;

    sectionPost.appendChild(div);
    div.innerHTML += `
    <a class="urls__content--link" href="${url.value}" target="_blank">${url.value}</a>
    <a class="button__close"><i class="fas fa-times urls__icon "></i></a>
    `;
    // // let link = `
    // //  <a class="urls__content--link" href="${url.value}" target="_blank">${url.value}</a>
    // //  <a class="button__close"><i class="fas fa-times urls__icon "></i></a>
    // //  `;
  }

  if (url.value == "") {
    alert("You need provide a valid url");
  }

  if (!inputLink.checked && !inputImage.checked && !inputVideo.checked) {
    alert("Please, select a type of Url!");
  } else {
    sectionPost.innerHTML += "";
    url.value = "";
  }

  // reseting radio box  after click on add
  let removeChecked = document.getElementsByName("typeurl");
  for (var i = 0; i < removeChecked.length; i++) {
    removeChecked[i].checked = false;
  }
}

//Delete div
let btns = document.querySelectorAll(".urls__content .urls__icon");
Array.from(btns).forEach(function (button) {
  button.addEventListener("click", function (e) {
    const divToExclude = e.target.parentElement.parentElement;
    divToExclude.parentNode.removeChild(divToExclude);
  });
});
