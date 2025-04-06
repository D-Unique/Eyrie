import express from 'express';
import AppController from "../controllers/App.controllers"
const Approuter = express.Router()

Approuter.get("healthcheck", AppController.healthCheck)

export default Approuter
