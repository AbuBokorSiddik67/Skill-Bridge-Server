import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import cookieParser from "cookie-parser";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// application routes
app.use('/v1/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from skill-bridge server!');
});

export default app;
