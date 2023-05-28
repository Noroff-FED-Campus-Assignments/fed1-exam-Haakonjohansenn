const postContainer = document.querySelector(".details-container");
const body = document.querySelector("body");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url =
  "https://discovertublog.flywheelsites.com/wp-json/wp/v2/posts/" + id;

async function fetchPost() {
  try {
    const detailsResponse = await fetch(url);
    if (!detailsResponse.ok) {
      throw new Error("Error loading post details. Please try again later.");
    }
    const detailsResult = await detailsResponse.json();

    newHtml(detailsResult);
    addImageModalEventListeners();

    document.title = `${detailsResult.title.rendered}`;
  } catch (e) {
    displayErrorMessage(e.message);
    console.log(e);
  }
}

function newHtml(detailsResult) {
  postContainer.innerHTML = `<div class="parent-container">
                               <div class="post-text">
                                 <h2>${detailsResult.title.rendered}</h2>
                                 <p>${detailsResult.content.rendered}</p>
                               </div>
                             </div>`;
}

function addImageModalEventListeners() {
  const images = postContainer.querySelectorAll("img");
  images.forEach((image) => {
    image.addEventListener("click", displayModal);
  });
}

function displayModal(event) {
  const modalContainer = document.createElement("div");
  modalContainer.className = "modal-container";
  const modalImage = document.createElement("img");
  modalImage.src = event.target.src;
  modalImage.className = "modal-image";

  modalContainer.appendChild(modalImage);
  body.appendChild(modalContainer);

  modalContainer.addEventListener("click", closeModal);
}

function closeModal(event) {
  if (event.target.className === "modal-container") {
    event.target.remove();
  }
}

function displayErrorMessage(message) {
  postContainer.innerHTML = `<div class="error-message">${message}</div>`;
}

fetchPost();
