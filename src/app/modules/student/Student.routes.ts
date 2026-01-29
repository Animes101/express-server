import express from 'express';
import { studentController,  } from './student.controlar.js';



const router=express.Router();

router.post('/create-student', studentController.createStudent);
router.get('/get-students', studentController.getAllStudents )
router.delete('/delete/:id', studentController.deleteStudent )


export const StudentRoutes=router;