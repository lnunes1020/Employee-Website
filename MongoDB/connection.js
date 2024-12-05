import {MongoClient} from "mongodb";
import {MongoConfig} from "./settings.js";


const client = new MongoClient(MongoConfig.url);

export default client;
  




