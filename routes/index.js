
import userRoutes from "./users.js" 


//routes

const constructorMethod=(app)=>{
console.log("getting routes");
app.use('/users',userRoutes);
};

export default constructorMethod;
