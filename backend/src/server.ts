import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

import AppError from './errors/AppError';
import routes from './routes';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
        code: err.statusCode,
      });
    }

    return response.status(500).json({
      error: 'error',
      message: err.message,
      code: 500,
    });
  },
);

app.listen(process.env.PORT || 3333, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server started on port 3333!');
});
