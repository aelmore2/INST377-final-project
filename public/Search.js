function loadSlowAPI(bookName) {
  return fetch(`https://openlibrary.org/search.json?title=${bookName}`).then(
    (result) => result.json()
  );
}

async function getBooks() {
  const bookName = document.getElementById("bookName").value;
  const slowAPIResponse = await loadSlowAPI(bookName);
  console.log(slowAPIResponse);
  const result = await slowAPIResponse;

  const info = document.querySelector(".results");
  info.innerHTML = "";

  result.docs.forEach(async (book) => {
    const bookContainer = document.createElement("div");
    bookContainer.setAttribute("class", "bookInfo");

    const cover = document.createElement("img");
    cover.src = book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : "No-image-available.png";

    const title = document.createElement("h4");
    title.innerHTML = book.title;

    const author = document.createElement("p");
    author.innerHTML = book.author_name;

    bookContainer.appendChild(cover);
    bookContainer.appendChild(title);
    bookContainer.appendChild(author);

    info.appendChild(bookContainer);
  });

  document.getElementById("bookName").value = "";
}
