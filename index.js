const supabaseClient = require("@supabase/supabase-js");
const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get("/", (req, res) => {
  res.sendFile("public/Home.html", { root: __dirname });
});

app.get("/books", async (req, res) => {
  console.log("Attempting to GET all books");

  const { data, error } = await supabase.from("books").select();

  if (error) {
    console.log("Error", error);
    res.send(error);
  } else {
    res.send(data);
  }
});

app.post("/books", async (req, res) => {
  console.log("Adding Book");

  console.log(req.body);
  var title = req.body.title;
  var author = req.body.author;
  var cover = req.body.cover;
  var summary = req.body.summary[0];

  const { data, error } = await supabase
    .from("books")
    .insert({
      title: title,
      author: author,
      cover: cover,
      summary: summary,
    })
    .select();

  if (error) {
    console.error("Supabase Error:", error);
    res.send(error);
  } else {
    res.send(data);
  }
});

app.delete("/books", async (req, res) => {
  console.log("Removing a book");
  var id = req.body.id;
  const { data, error } = await supabase.from("books").delete().eq("id", id);

  if (error) {
    console.error("Supabase Error:", error);
    res.send(error);
  } else {
    res.send(data);
  }
});

app.listen(port, () => {
  console.log("APP IS ALIVE ON PORT", port);
});
