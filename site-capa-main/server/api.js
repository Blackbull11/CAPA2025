import express from "express";
import CmsData from './data.js';
import fetch from "node-fetch";
import 'dotenv/config';


const api = express.Router();

async function getNewData() {
    const response = await fetch(process.env.APP_SCRIPT_LINK);
    return response.json();
}

const data = new CmsData();
//const baseData = await getNewData();
//data.replaceData(baseData.data);


api.get('/update', async (_, res) => {
    const newData = await getNewData();
    data.replaceData(newData.data);
    res.send('Data successfully updated with : ' + JSON.stringify(newData.data));
})


api.get('/message', (_, res) => {
    res.json(data.getMessage());
});


export default api;