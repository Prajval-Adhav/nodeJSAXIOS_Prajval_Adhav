const rocketService = require('../services/rocketServices');
const Rockets = require("../models/rocketModel");
const axios = require('axios');
const config = require("../common/config");

const url = config.url;

const fetchAllRockets = async(url) => {
    const result = await axios.get(url);
    const response = result.data;
    return response;
}

const addAllRockets = async(req,res) => {
    try{
        const jsonData = await fetchAllRockets(url);
        for(const element of jsonData){
            const rocket = new Rockets(element);
            const result = await rocketService.addRockets(rocket);
        }
        res.status(201).json({message:"Added all rockets"});
    }catch (error) {
        res.status(500).json({message:error.message});
        throw error;
    }
}

const getAllRockets = async(req,res) => {
    try{
        const result = await rocketService.getAllRockets(req.body);
        res.status(200).json({result})
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    addAllRockets,
    getAllRockets
};