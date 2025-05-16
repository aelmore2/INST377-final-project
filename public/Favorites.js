async function loadBookData() {
  await fetch(`/books`)
    .then((result) => result.json())
    .then((resultJson) => {
      const info = document.querySelector(".results");
      info.innerHTML = "";

      resultJson.forEach((book) => {
        const bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", "bookInfo");

        const cover = document.createElement("img");
        cover.setAttribute("class", "bookCover");
        cover.src = book.cover;

        const title = document.createElement("h4");
        title.setAttribute("class", "bookTitle");
        title.innerHTML = book.title;

        const author = document.createElement("p");
        author.setAttribute("class", "bookAuthor");
        author.innerHTML = book.author;

        const summary = document.createElement("p");
        summary.setAttribute("class", "bookSummary");
        summary.innerHTML = book.summary;

        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";

        removeButton.addEventListener("click", () => {
          removeFromFavorites(book, bookContainer);
        });

        bookContainer.appendChild(cover);
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(summary);
        bookContainer.appendChild(removeButton);

        info.appendChild(bookContainer);
      });
    });
}

async function removeFromFavorites(book, bookContainer) {
  await fetch(`/books`, {
    method: "DELETE",
    body: JSON.stringify({
      title: book.title,
      author: book.author,
      cover: book.cover,
      summary: book.summary,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((result) => result.json())
    .then(() => {
      bookContainer.remove();
    });
}

window.onload = loadBookData;
