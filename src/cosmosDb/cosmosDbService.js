const container = require("./cosmosConfig");

const saveDataToContainer = async (model) => {
    try {
      const { resource: savedItem } = await container.items.create(model);
      console.log(`Item saved with ID: ${savedItem.id} ${savedItem.dType}`);
      return savedItem;
    } catch (error) {
      console.error("Error saving data to container:", error.message);
      throw error;
    }
  };


const getAllDataFromContainer = async (dType , pageNo = 1, pageSize = 10) => {
    try {
      // Better approach with parameterized query
      const querySpec = {
        query: 'SELECT * FROM c WHERE c.dType = @dType AND c.active = true AND c.archived = false',
        parameters: [
          { name: '@dType', value: dType }
        ],
        requestOptions: { pageSize: pageSize },
      };
      const skipCount = (pageNo - 1) * pageSize;
      const { resources: rockets } = await container.items.query(querySpec).fetchAll();
      const currentPageRockets = rockets.slice(skipCount, skipCount + pageSize);
  
      return { rockets: currentPageRockets };
    } catch (error) {
      console.error('Error fetching data from container:', error.message);
      throw error;
    }
  };

  const getDataByParameter = async(parameter , parameterValue , dType)=>{
    const querySpec = {
      query : "SELECT * FROM c WHERE c[@parameter] = @parameterValue AND c.dType = @dType AND c.active = true AND c.archived = false",
      parameters : [
        { name: '@parameter', value: parameter },
        { name: '@parameterValue', value: parameterValue },
        { name: '@dType', value: dType },
      ]
    }

    const {resources:result} = await container.items.query(querySpec).fetchAll();
    if(result.length > 0)
    {
      return result[0];
    }
    else
    {
      const result = [];
      return result;
    }
  }
  module.exports = {
    saveDataToContainer,
    getAllDataFromContainer,
    getDataByParameter
  }