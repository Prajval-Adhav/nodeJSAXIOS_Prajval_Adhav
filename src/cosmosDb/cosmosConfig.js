const { CosmosClient } = require("@azure/cosmos");
const config = require("../common/config");

try{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    const client = new CosmosClient({
        endpoint: config.cosmosDb.endpoint,
        key: config.cosmosDb.key,
        allowInsecureConnection: true,
    });
    
    const database = client.database(config.cosmosDb.dbName);
    const container = database.container(config.cosmosDb.containerName);
    
    module.exports = container;
} catch(error){
    console.error("Error initializing Cosmos DB client", error.message);
    throw error;
}