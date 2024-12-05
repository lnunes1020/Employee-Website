//create employees using Mongodb

import client from "../MongoDB/connection.js";

import { MongoConfig } from "../MongoDB/settings.js";

//get dbname

const dbName= MongoConfig.dbName;


export async function createUser(user){
    //get the database

    const db = client.db(dbName);
    const employeesCollection=db.collection("employees");

    try{
        const newUser = await employeesCollection.insertOne(user);
        const employeeID= newUser.insertedId;
        console.log("Employee ID is:", employeeID);
    }
    catch(err){
        throw new Error("Not able to create user");
    }
    
const newUser={
    name: user.name,
    title: user.title,
    department: user.department
    
    }
    
}