function loadSlowAPI(bookName) {
  return fetch(`https://gutendex.com/books/?search=${bookName}`).then(
    (result) => result.json()
  );
}

async function getBooks() {
  console.log("Getting books");
  const bookName = document.getElementById("bookName").value;

  const info = document.querySelector(".results");
  info.innerHTML = "";

  document.querySelector(".loader").style.display = "block";

  const slowAPIResponse = await loadSlowAPI(bookName);
  console.log(slowAPIResponse);
  const result = await slowAPIResponse;

  result.results.forEach((book) => {
    const bookContainer = document.createElement("div");
    bookContainer.setAttribute("class", "bookInfo");

    const cover = document.createElement("img");
    cover.setAttribute("class", "bookCover");
    cover.src = book.formats["image/jpeg"];

    const title = document.createElement("h4");
    title.setAttribute("class", "bookTitle");
    title.innerHTML = book.title;

    const author = document.createElement("p");
    author.setAttribute("class", "bookAuthor");
    author.innerHTML = book.authors[0].name;

    const summary = document.createElement("p");
    summary.setAttribute("class", "bookSummary");
    summary.innerHTML = book.summaries;

    const addButton = document.createElement("button");
    addButton.setAttribute("class", "button-87");
    addButton.innerHTML = "Favorite";

    addButton.addEventListener("click", () => {
      addToFavorites(book);
    });

    bookContainer.appendChild(cover);
    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(summary);
    bookContainer.appendChild(addButton);

    info.appendChild(bookContainer);
  });

  document.querySelector(".loader").style.display = "none";

  document.getElementById("bookName").value = "";
}

async function addToFavorites(book) {
  await fetch(`/books`, {
    method: "POST",
    body: JSON.stringify({
      title: book.title,
      author: book.authors[0].name,
      cover: book.formats["image/jpeg"],
      summary: book.summaries,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((result) => result.json());
}

if (annyang) {
  annyang.addCommands({
    "search *input": function (input) {
      console.log("Searching for book");
      document.getElementById("bookName").value = input;
      getBooks();
    },
  });

  SpeechKITT.annyang();

  SpeechKITT.vroom();
}
