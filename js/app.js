const resultsContainer = document.querySelector(".carousel-items");

const url = "https://discovertublog.flywheelsites.com/wp-json/wp/v2/posts";

async function fetchPosts() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error loading posts. Please try again later.");
    }
    const jsonResult = await response.json();
    const posts = jsonResult;

    posts.forEach(function (post) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.content.rendered, "text/html");
      const images = doc.querySelectorAll("img");
      let imageHtml = "";
      if (images.length > 0) {
        const imageSrc = images[0].getAttribute("src");
        imageHtml = `<img class="post-images" src="${imageSrc}" alt="${post.title.rendered}" />`;
      }

      resultsContainer.innerHTML += `
        <a href="../app/details.html?id=${post.id}" class="parent-container">
          <div class="card-container">
            <div class="post-image">
              ${imageHtml}
            </div>
            <div class="post-title">
              <h2>${post.title.rendered}</h2>
            </div>
          </div>
        </a>
      `;
    });

    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const items = document.querySelector(".carousel-items");
    const itemWidth = 210;
    const margin = 10;
    let currentPosition = 0;

    prevBtn.addEventListener("click", () => {
      currentPosition += itemWidth + margin;
      if (currentPosition > 0) {
        currentPosition = -(itemWidth + margin) * (posts.length - 1);
      }
      items.style.transform = `translateX(${currentPosition}px)`;
    });


    nextBtn.addEventListener("click", () => {
      currentPosition -= itemWidth + margin;
      
      if (currentPosition <= -(itemWidth + margin) * (posts.length - 1)) {
        currentPosition = 0;
      }
      
      items.style.transform = `translateX(${currentPosition}px)`;
    
      if (currentPosition === -(itemWidth + margin) * (posts.length - 1) - itemWidth) {
        items.classList.add("transition-reset");
        setTimeout(() => {
          items.classList.remove("transition-reset");
          items.style.transform = `translateX(${currentPosition}px)`;
        }, 0);
      }
    });
  } catch (e) {
    displayErrorMessage(e.message);
    console.log(e);
  }
}

function displayErrorMessage(message) {
  resultsContainer.innerHTML = `<div class="error-message">${message}</div>`;
}

fetchPosts();
