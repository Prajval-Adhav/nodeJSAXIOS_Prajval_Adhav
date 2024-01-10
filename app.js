const express = require("express");
const app = express();
const axios = require("axios");
const port = process.env.PORT || 5000;
const router = require("./src/routes/rocketRoutes");

app.use(express.json());
app.use("/rockets", router);

// app.get("/",(req,res)=>{
//     res.json({message: "default page"});
// });

app.get('/', (req,res) => {
    axios.get("https://api.spacexdata.com/v3/rockets")
    .then((response) =>{
        const data = response.data;
        res.json(data[0]);
    })
    .catch((error) => {
        console.log(error);
        res.json({msg : error.message});
    })
})

app.listen(port, ()=> {
    console.log(`Routing works and running on ${port}`);
});
