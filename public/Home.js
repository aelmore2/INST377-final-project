function loadTopicAPI(topic) {
  return fetch(`https://gutendex.com/books?topic=${topic}`).then((result) =>
    result.json()
  );
}

async function getBookshelves() {
  const bookShelf = ["Horror", "Adventure", "Fantasy", "Humor", "Mystery"];

  const topicSelection = Math.floor(Math.random() * bookShelf.length);
  const topic = bookShelf[topicSelection];
  const topicAPIResponse = await loadTopicAPI(topic);
  console.log(topicAPIResponse);
  const result = await topicAPIResponse;

  const info = document.querySelector(".results");
  info.innerHTML = "";

  const bookShelfName = document.querySelector(".bookShelfName");
  bookShelfName.innerHTML = topic;

  result.results.forEach((book, index) => {
    if (index >= 10) return;

    const bookContainer = document.createElement("div");
    bookContainer.setAttribute("class", "bookInfo");

    const cover = document.createElement("img");
    cover.src = book.formats["image/jpeg"];

    const title = document.createElement("h4");
    title.innerHTML = book.title;

    const author = document.createElement("p");
    author.innerHTML = book.authors[0].name;

    const addButton = document.createElement("button");
    addButton.innerHTML = "Favorite";

    bookContainer.appendChild(cover);
    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(addButton);

    info.appendChild(bookContainer);
  });
}

window.onload = getBookshelves;
