import express from 'express';
import AppController from "../controllers/App.controllers"
const Approuter = express.Router()

Approuter.get("/healthcheck", AppController.healthCheck)
Approuter.get("/createmysqltable", AppController.createMysqlTable)
Approuter.get("/dropmysqltable", AppController.dropMysqlTable)

export default Approuter
