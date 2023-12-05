import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { EmployeeRoutes } from './app/modules/employee/employee.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/employee',EmployeeRoutes)



app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;