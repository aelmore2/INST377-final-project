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

app.listen(port, () => {
  console.log("APP IS ALIVE ON PORT", port);
});

app.post("/books", async (req, res) => {
  console.log("Adding Book");

  console.log(req.body);
  var title = req.body.title;
  var author = req.body.author;
  var published = req.body.published;

  const { data, error } = await supabase
    .from("book")
    .insert({
      title: title,
      author: author,
      published: published,
    })
    .select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }
});
