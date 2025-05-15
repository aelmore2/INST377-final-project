function loadSlowAPI(bookName) {
  return fetch(`https://gutendex.com/books/?search=${bookName}`).then(
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

  // Possible ways to add book cards to database: setAttribute?
  result.results.forEach((book) => {
    const bookContainer = document.createElement("div");
    bookContainer.setAttribute("class", "bookInfo");

    const cover = document.createElement("img");
    cover.src = book.formats["image/jpeg"];

    const title = document.createElement("h4");
    title.innerHTML = book.title;

    const author = document.createElement("p");
    author.innerHTML = book.authors[0].name;

    const summary = document.createElement("p");
    summary.innerHTML = book.summaries;

    const addButton = document.createElement("button");
    addButton.innerHTML = "Favorite";

    bookContainer.appendChild(cover);
    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(summary);
    bookContainer.appendChild(addButton);

    info.appendChild(bookContainer);
  });

  document.getElementById("bookName").value = "";
}

async function addToFavorites() {
  await fetch(`/books`, {
    method: "POST",
    body: JSON.stringify({
      
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((result) => result.json());

  await getBooks();
}
