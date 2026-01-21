import { IStudent } from "./student.interface.js";
import StudentModel from "./student.schema.js";

const createStudent= async (student:IStudent)=>{


    const result=await StudentModel.create(student);

    return result;
}

export const StudentService={
    createStudent,
}