import {MongoClient} from "mongodb";
import {MongoConfig} from "./settings.js";


const client = new MongoClient(MongoConfig.url);

export default client;
  


  async function main(){

    try {
        await client.connect();
    
        // await listDatabases(client);
     
    } catch (e) {
        console.error(e);
    }
    finally{
        await client.close();
    }
}


main().catch(console.error);


