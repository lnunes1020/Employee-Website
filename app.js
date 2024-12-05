import express from "express";
import exphbs  from "express-handlebars";
const app=express();
app.engine("handlebars", exphbs.engine({ defaultLayout: "users" }));
app.set("view engine", "handlebars")
app.set("views", "./views");

app.listen(8000,()=>{
    console.log("Running on http://localhost:8000");
});

