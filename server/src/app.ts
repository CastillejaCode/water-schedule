import express from 'express';
require('express-async-errors');
export const app = express();
import cors from 'cors';
import { middleware } from './utils/middleware';
import { plantsRouter } from './controllers/plants';

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.set('json replacer', middleware.replacer);
app.use('/api/plants', plantsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
