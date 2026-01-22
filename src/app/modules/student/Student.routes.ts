import express from 'express';
import { studentController } from './student.controlar.js';



const router=express.Router();

router.post('/create-student', studentController.createStudent);


export const StudentRoutes=router;