if (annyang) {
  annyang.addCommands({
    "navigate to home": function () {
      window.location.href = "Home.html";
    },

    "navigate to home page": function () {
      window.location.href = "Home.html";
    },

    "navigate to search": function () {
      window.location.href = "Search.html";
    },

    "navigate to search page": function () {
      window.location.href = "Search.html";
    },

    "navigate to favorites": function () {
      window.location.href = "Favorites.html";
    },

    "navigate to favorites page": function () {
      window.location.href = "Favorites.html";
    },

    "navigate to about": function () {
      window.location.href = "About.html";
    },

    "navigate to about page": function () {
      window.location.href = "About.html";
    },
  });

  annyang.addCommands({
    "search *input": function (input) {
      window.location.href = "Search.html";
      console.log("Searching for book");
      document.getElementById("bookName").value = input;
      getBooks();
    },
  });

  SpeechKITT.annyang();

  SpeechKITT.vroom();
}
