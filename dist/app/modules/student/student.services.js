import { StudentModel } from "./student.schema.js";
const createStudent = async (student) => {
    // const result=await StudentModel.create(student);
    // return result;
    const studentInstance = new StudentModel(student);
    if (await StudentModel.isExitsStudent(student.id)) {
        throw new Error('user is all Redy  exits');
    }
    const result = studentInstance.save();
    return result;
};
const getAllStudents = async () => {
    const result = await StudentModel.find();
    return result;
};
export const StudentService = {
    createStudent,
    getAllStudents,
};
