import StudentModel from "./student.schema.js";
const createStudent = async (student) => {
    const result = await StudentModel.create(student);
    return result;
};
export const StudentService = {
    createStudent,
};
