# INST377-final-project

Link to vercel website: https://inst-377-final-project-six.vercel.app/

Title of project:
Inkwell

Description of your project:
This project allows users to search through a catalog of classic, copyright-free, and public domain works of literature. Users will have the ability to search for specific works by title or by author or receive randomly generated recommendations based on a book's overall popularity or by its genre. Users will also be able to navigate through the various pages using voice commands by saying "Navigate to {page name}," and on the search page they will be able to search for works by saying "Search {input}."

Description of target browsers:
The target browsers for this project are Mozilla FireFox, Google Chrome, Microsoft Edge, and Safari.

Link to developer manual:
[Developer Manual](#developer-manual)

# developer-manual

Developer Manual

How to install your application and all dependencies and run on a server:

1. CD into the main project folder in your terminal. Do this by typing "cd INST377-final-project"
2. Install the supabase dependency by typing "npm install @supabase/supabase-js"
3. Install the body parser dependency by typing "npm install body-parser"
4. Install the dotenv dependency by typing "npm install dotenv --save"
5. Install the express dependency by typing "npm install express"
6. Install the granim dependency by typing "npm install granim --save"
7. Install the nodemon dependency by typing "npm install nodemon"
8. Run the application by typing "npm start"

The API for your server application

1. app.get("/books", async (req, res)). This endpoint retrieves all of the books in the "books" table.
2. app.post("/books", async (req, res)). This endpoint adds a book to the "books" table.
3. app.delete("/books", async (req, res)). This endpoint removes a book to the "books" table.

Known bugs

1. Currently no known bugs.

Road-map for future development

1. Add more granularity to the level in which users can search for books and authors. This would mean allowing users to filter by publishing year, genre, or page count.
2. Allow users to create different lists based on their preferences.
3. Introduce a book review or rating system.
4. Introduce a recomendation system based on user activity.
