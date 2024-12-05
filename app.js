import express from "express";
import exphbs  from "express-handlebars";
import constructorMethod from "./Routes/index.js";
const app=express();
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars")
app.set("views", "./views");
app.use("/public", express.static("public"));
constructorMethod(app);

app.listen(8000,()=>{
    console.log("Running on http://localhost:8000");
});

