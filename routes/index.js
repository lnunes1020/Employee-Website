
import userRoutes from "./users.js" 


//routes

const constructorMethod=(app)=>{
console.log("getting routes");
app.get("/", (req, res) => {
    res.redirect("home");
});

app.get("/home", (req,res) =>{
    res.render("home")
});
app.use('/users',userRoutes);

};


export default constructorMethod;
