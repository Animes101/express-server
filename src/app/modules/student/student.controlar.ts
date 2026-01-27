import { Request, Response } from "express";
import { StudentService } from "./student.services.js";
import createStudentSchema from "./zod.validation.js";



const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    const zodParseData = createStudentSchema.safeParse(student);

    if (!zodParseData.success) {
      return res.status(400).json({
        success: false,
        message: 'Zod validation failed',
        error: zodParseData.error.format(),
      });
    }

    // validated data
    const result = await StudentService.createStudent(
      zodParseData.data
    );

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message:  err.message  ||  'some problems' ,
      error: err,
    });
  }
};



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