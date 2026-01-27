import { IStudent } from "./student.interface.js";
import { StudentModel } from "./student.schema.js";


const createStudent= async (student:IStudent)=>{


    // const result=await StudentModel.create(student);

    // return result;

    const studentInstance=new StudentModel(student);

       if( await studentInstance.isUserExits(student.id)){


        throw new Error('user is exits');

         
       }

    const result=studentInstance.save();

    return result;


}


const getAllStudents= async()=>{

     const result=await StudentModel.find();

     return result;
}

export const StudentService={
    createStudent,
    getAllStudents,
}

