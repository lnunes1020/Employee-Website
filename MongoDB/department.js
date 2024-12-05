import client from "./connection.js"
import { MongoConfig } from "./settings.js";



async function setupDatabase() {

    try {

        await client.connect();

        console.log("access db server");
        //set up db connection
        const db = client.db(MongoConfig.dbName);

        console.log("connected to db server");

        try{
            const result= await db.createCollection("department");
            console.log("Created collection successfully");
        }

    catch(err){

        console.log("Error accessing db", err);
    }
}
    finally{
        await client.close();
        console.log("Connection closed");
    }
    
}



setupDatabase();


