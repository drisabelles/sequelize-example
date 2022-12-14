import express from 'express';
import routes from './routes';
import cors from 'cors';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  routes() { 
    this.server.use(routes)
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(express.json())
  }
}

export default new App().server;
