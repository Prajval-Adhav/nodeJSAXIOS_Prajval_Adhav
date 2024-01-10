require('dotenv').config();

module.exports = {
    cosmosDb: {
        endpoint: process.env.COSMOSDB_ENDPOINT,
        key: process.env.COSMOSDB_KEY,
        
        dbName: process.env.COSMOSDB_DBNAME,
        containerName: process.env.COSMOSDB_CONTAINERNAME
    },

    rocketdtype : "rockets",
    url : "https://api.spacexdata.com/v3/rockets"
}