const resultsContainer = document.querySelector("#results-container");
const loadMoreButton = document.querySelector("#load-more");
const search = document.querySelector("#search-bar");

const url =
  "https://discovertublog.flywheelsites.com/wp-json/wp/v2/posts?per_page=12";

let displayedPosts = 0;

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const jsonResult = await response.json();
    const posts = jsonResult;

    for (
      let i = displayedPosts;
      i < displayedPosts + 9 && i < posts.length;
      i++
    ) {
      const post = posts[i];
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.content.rendered, "text/html");
      const images = doc.querySelectorAll("img");
      let imageHtml = "";
      if (images.length > 0) {
        const imageSrc = images[0].getAttribute("src");
        imageHtml = `<img class="post-images" src="${imageSrc}" alt="${post.title.rendered}" />`;
      }

      resultsContainer.innerHTML += `
      <div class="parent-container">
      <div class="card-container">
      <div class="post-image">
      ${imageHtml}
      </div>
      <a href="../app/details.html?id=${post.id}">
            <div class="post-title">
              <h2>${post.title.rendered}</h2>
            </div>
            </a>
          </div>
          <div>
      `;
    }

    displayedPosts += 9;

    if (displayedPosts >= posts.length) {
      loadMoreButton.style.display = "none";
    } else {
      loadMoreButton.style.display = "block";
    }

    addImageClickListeners();
  } catch (e) {
    console.log(e);
  }
}

fetchPosts();

function addImageClickListeners() {
  const images = document.querySelectorAll('.post-images');
  images.forEach((image) => {
    image.addEventListener('click', openModal);
  });
}

function openModal(event) {
  const clickedImage = event.target;
  const imageSrc = clickedImage.getAttribute('src');

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const modalImage = document.createElement('img');
  modalImage.src = imageSrc;

  modalContainer.appendChild(modalImage);
  document.body.appendChild(modalContainer);

  modalContainer.addEventListener('click', closeModal);
}

function closeModal(event) {
  event.stopPropagation();
  const modalContainer = event.currentTarget;
  modalContainer.remove();
}

loadMoreButton.addEventListener("click", function () {
  setTimeout(fetchPosts, 500);
});

