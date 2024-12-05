import * as user from "../Data/users.js"; 


async function createNewEmployee(){
try{
const newUser1 ={
    name: "Lorraine",
    jobTitle : "Dentist", 
    department: "Dentistry"
}
await user.createUser(newUser1);
}
catch(err){
    throw new Error("User not able to be created")

}
finally{
    console.log("User was created successfully");

    process.exit(0);
}
}
createNewEmployee();



