import { Request, Response } from "express";
import { StudentService } from "./student.services.js";


const createStudent= async(req:Request, res:Response)=>{
 try{
       const student=req.body;

    const result=await StudentService.createStudent(student)

    res.status(200).json({
        success:true,
        message:'Student created successfully',
        data:result,
    })
 }catch(err){

    res.status(400).json({
        success:false,
        message:'Failed to create student',
        error:err,                   
    })

 }

}


const getAllStudents= async(req:Request, res:Response)=>{

    try{
        const result=await StudentService.getAllStudents();
        res.status(200).json({
            success:true,
            message:'Students retrieved successfully',
            data:result,
        })
    }catch(err){

        res.status(400).json({
            success:false,
            message:'Failed to get students',
            error:err,                   
        })
    }
}

export const studentController={
    createStudent,
    getAllStudents
}