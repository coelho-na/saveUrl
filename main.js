// Declaring variables of elements I need

let btn = document.querySelector(".form__button");
let url = document.getElementById("textUrl");
let sectionPost = document.querySelector(".urls__post");
let inputImage = document.querySelector("input#image");
let inputVideo = document.querySelector("input#video");
let inputLink = document.querySelector("input#link");

// Event When Click on Button
btn.addEventListener("click", createUrlList);

// function to fire when btn is clicked

function createUrlList() {
  if (inputImage.checked && url.value != "") {
    sectionPost.innerHTML += `
    <div >
      <img src="${url.value}" />
      <i class="fas fa-times button__close"></i>
    </div>`;
  }
  if (inputVideo.checked && url.value != "") {
    sectionPost.innerHTML += `
    <div>
      <iframe width="100%" height="480" src="${url.value}">
      </iframe>
     <i class="fas fa-times button__close"></i> 
    </div>`;
  }
  if (inputLink.checked && url.value != "") {
    sectionPost.innerHTML += `
    <div >
      <a href="${url.value}" target="_blank">${url.value}</a>
      <i class="fas fa-times button__close" ></i>
    </div>`;
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

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("button__close")) {
    let chield = document.querySelector(".urls__post  div");
    chield.remove();
  }
});
