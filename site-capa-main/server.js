import express from "express";
import ViteExpress from "vite-express";
import 'dotenv/config';

import api from './server/api.js';

const app = express();
//ViteExpress.config({ mode: "production" })

app.use('/api', api);

ViteExpress.listen(app, process.env.PORT, () => console.log(`Server is listening on http://localhost:${process.env.PORT}`));