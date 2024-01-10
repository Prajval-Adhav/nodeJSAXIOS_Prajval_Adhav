const cosmosDbService = require("../cosmosDb/cosmosDbService");
const config = require('../common/config');

const addRockets = async(rocket) => {
    rocket.initialize(true, config.rocketdtype , "" , "admin");
    const result = await cosmosDbService.saveDataToContainer(rocket);
    return result;
}

const getAllRockets = async({ pageNo = 1, pageSize = 10}) => {
    try{
        const result = await cosmosDbService.getAllDataFromContainer(
            config.rocketdtype,
            pageNo,
            pageSize
        );
        return result.rockets;
    }catch(error){
        throw error
    }
};

const getRocketsById = async(uId) => {
    const rocket = await cosmosDbService.getDataByParameter("uId", uId, config.rocketdtype);
    return rocket;
}

module.exports = {
    addRockets,
    getAllRockets,
    getRocketsById
};