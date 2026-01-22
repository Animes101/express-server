import express from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/Student.routes.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    const a = 'hello server';
    res.send(a);
});
app.use('/api/v1', StudentRoutes);
export default app;
